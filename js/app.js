/**
 * EmailJS設定
 *
 * EmailJS管理画面で取得した値へ置き換えてください。
 */
const EMAILJS_CONFIG = {
  publicKey: "EMgUAvOGX9y4tb7xB",
  serviceId: "service_d98epfr",
  templateId: "template_nv2b8w7"
};

const state = {
  selectedCocktail: null,
  selectedCategory: "ALL",
  isSending: false,
  toastTimerId: null
};

const elements = {};

document.addEventListener("DOMContentLoaded", initialize);

function initialize() {
  cacheElements();
  bindEvents();
  initializeEmailJs();
  renderMenu();
}

function cacheElements() {
  elements.menuList = document.querySelector("#menuList");
  elements.filterButtons = document.querySelectorAll(".filter-button");
  elements.orderDialog = document.querySelector("#orderDialog");
  elements.orderForm = document.querySelector("#orderForm");
  elements.dialogCloseButton = document.querySelector("#dialogCloseButton");
  elements.cancelButton = document.querySelector("#cancelButton");
  elements.confirmButton = document.querySelector("#confirmButton");
  elements.customerName = document.querySelector("#customerName");
  elements.dialogCategory = document.querySelector("#dialogCategory");
  elements.dialogMenuName = document.querySelector("#dialogMenuName");
  elements.dialogDescription = document.querySelector("#dialogDescription");
  elements.dialogStrength = document.querySelector("#dialogStrength");
  elements.dialogSweetness = document.querySelector("#dialogSweetness");
  elements.toast = document.querySelector("#toast");
}

function bindEvents() {
  elements.filterButtons.forEach((button) => {
    button.addEventListener("click", handleFilterClick);
  });

  elements.menuList.addEventListener("click", handleMenuListClick);
  elements.orderForm.addEventListener("submit", handleOrderSubmit);
  elements.cancelButton.addEventListener("click", closeOrderDialog);
  elements.dialogCloseButton.addEventListener("click", closeOrderDialog);

  // ダイアログ外側を押した場合に閉じる
  elements.orderDialog.addEventListener("click", (event) => {
    if (event.target === elements.orderDialog) {
      closeOrderDialog();
    }
  });
}

function initializeEmailJs() {
  if (!window.emailjs) {
    console.error("EmailJS SDKを読み込めませんでした。");
    return;
  }

  emailjs.init({
    publicKey: EMAILJS_CONFIG.publicKey
  });
}

function handleFilterClick(event) {
  state.selectedCategory = event.currentTarget.dataset.category;

  elements.filterButtons.forEach((button) => {
    button.classList.toggle(
      "is-active",
      button.dataset.category === state.selectedCategory
    );
  });

  renderMenu();
}

function renderMenu() {
  const filteredMenu = COCKTAIL_MENU.filter((cocktail) => {
    return (
      state.selectedCategory === "ALL" ||
      cocktail.category === state.selectedCategory
    );
  });

  if (filteredMenu.length === 0) {
    elements.menuList.innerHTML =
      '<p class="empty-message">該当するメニューはありません。</p>';
    return;
  }

  elements.menuList.innerHTML = filteredMenu
    .map(createMenuCardHtml)
    .join("");
}

function createMenuCardHtml(cocktail) {
  return `
    <article
      class="menu-card"
      style="--drink-color: ${escapeHtml(cocktail.color)}">
      <div class="menu-card__visual">
        <span class="menu-card__badge">
          ${escapeHtml(cocktail.category)}
        </span>
        <span class="menu-card__emoji" aria-hidden="true">
          ${escapeHtml(cocktail.emoji)}
        </span>
      </div>

      <div class="menu-card__body">
        <h2>${escapeHtml(cocktail.name)}</h2>
        <p class="menu-card__base-name">
          BASE: ${escapeHtml(cocktail.baseName)}
        </p>

        <p class="menu-card__description">
          ${escapeHtml(cocktail.description)}
        </p>

        <div class="menu-card__status">
          <div class="status-row">
            <span>強さ</span>
            <span class="meter" aria-label="5段階中${cocktail.strength}">
              ${createMeter(cocktail.strength, "☠")}
            </span>
          </div>

          <div class="status-row">
            <span>甘さ</span>
            <span class="meter" aria-label="5段階中${cocktail.sweetness}">
              ${createMeter(cocktail.sweetness, "●")}
            </span>
          </div>
        </div>

        <button
          type="button"
          class="order-button"
          data-menu-id="${escapeHtml(cocktail.id)}">
          この酒を召喚する
        </button>
      </div>
    </article>
  `;
}

function handleMenuListClick(event) {
  const orderButton = event.target.closest(".order-button");

  if (!orderButton) {
    return;
  }

  const cocktail = COCKTAIL_MENU.find(
    (item) => item.id === orderButton.dataset.menuId
  );

  if (!cocktail) {
    showToast("メニュー情報を取得できませんでした。", "error");
    return;
  }

  openOrderDialog(cocktail);
}

function openOrderDialog(cocktail) {
  state.selectedCocktail = cocktail;

  elements.dialogCategory.textContent = cocktail.category;
  elements.dialogMenuName.textContent = cocktail.name;
  elements.dialogDescription.textContent = cocktail.description;
  elements.dialogStrength.textContent = createMeter(cocktail.strength, "☠");
  elements.dialogSweetness.textContent = createMeter(cocktail.sweetness, "●");

  elements.customerName.value = "";
  elements.orderDialog.showModal();

  // スマホでは少し遅らせた方がフォーカスが安定する
  window.setTimeout(() => {
    elements.customerName.focus();
  }, 50);
}

function closeOrderDialog() {
  if (state.isSending) {
    return;
  }

  elements.orderDialog.close();
  state.selectedCocktail = null;
}

async function handleOrderSubmit(event) {
  event.preventDefault();

  if (!state.selectedCocktail || state.isSending) {
    return;
  }

  if (!isEmailJsConfigured()) {
    showToast(
      "EmailJSの設定値が未入力です。app.jsを確認してください。",
      "error"
    );
    return;
  }

  const customerName =
    elements.customerName.value.trim() || "名もなき客";

  setSendingState(true);

  try {
    const order = createOrder(state.selectedCocktail, customerName);

    await sendOrderMail(order);

    elements.orderDialog.close();

    showToast(
      `${order.cocktail.name}を受け付けました｜注文番号 ${order.orderNumber}`,
      "success"
    );

    state.selectedCocktail = null;
  } catch (error) {
    console.error("注文メールの送信に失敗しました。", error);

    showToast(
      "注文送信に失敗しました。バーテンダーを直接呼んでください。",
      "error"
    );
  } finally {
    setSendingState(false);
  }
}

function createOrder(cocktail, customerName) {
  return {
    orderNumber: createOrderNumber(),
    orderedAt: new Date().toLocaleString("ja-JP", {
      timeZone: "Asia/Tokyo",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }),
    customerName,
    cocktail
  };
}

async function sendOrderMail(order) {
  const templateParams = {
    order_number: order.orderNumber,
    ordered_at: order.orderedAt,
    customer_name: order.customerName,
    cocktail_name: order.cocktail.name,
    base_name: order.cocktail.baseName,
    category: order.cocktail.category,
    ingredients: order.cocktail.ingredients
      .map((ingredient) => `・${ingredient}`)
      .join("\n"),
    recipe: order.cocktail.recipe
      .map((step, index) => `${index + 1}. ${step}`)
      .join("\n"),
    tips: order.cocktail.tips
  };

  return emailjs.send(
    EMAILJS_CONFIG.serviceId,
    EMAILJS_CONFIG.templateId,
    templateParams
  );
}

function setSendingState(isSending) {
  state.isSending = isSending;
  elements.confirmButton.disabled = isSending;
  elements.cancelButton.disabled = isSending;
  elements.dialogCloseButton.disabled = isSending;

  elements.confirmButton.textContent =
    isSending ? "召喚中..." : "注文確定";
}

function isEmailJsConfigured() {
  return Object.values(EMAILJS_CONFIG).every((value) => {
    return value && !value.startsWith("YOUR_");
  });
}

function createOrderNumber() {
  const timestampPart = Date.now().toString().slice(-6);
  const randomPart = Math.floor(Math.random() * 90 + 10);

  return `MB-${timestampPart}-${randomPart}`;
}

function createMeter(value, symbol) {
  const safeValue = Math.max(0, Math.min(5, Number(value) || 0));

  return symbol.repeat(safeValue) + "・".repeat(5 - safeValue);
}

function showToast(message, type = "success") {
  window.clearTimeout(state.toastTimerId);

  elements.toast.textContent = message;
  elements.toast.className = `toast is-visible is-${type}`;

  state.toastTimerId = window.setTimeout(() => {
    elements.toast.className = "toast";
  }, 4200);
}

/**
 * innerHTMLへ値を埋め込むための最低限のエスケープ。
 */
function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
