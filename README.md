# MAKKY BAR メニューサイト

## ファイル構成

```text
makky-bar/
├─ index.html
├─ README.md
├─ css/
│  └─ style.css
└─ js/
   ├─ menu-data.js
   └─ app.js
```

## EmailJSの設定

`js/app.js` の次の3項目を、EmailJS管理画面の値へ置き換えてください。

```javascript
const EMAILJS_CONFIG = {
  publicKey: "YOUR_PUBLIC_KEY",
  serviceId: "YOUR_SERVICE_ID",
  templateId: "YOUR_TEMPLATE_ID"
};
```

## EmailJSテンプレート

件名例：

```text
【MAKKY BAR】{{cocktail_name}}の注文
```

本文例：

```text
注文番号：{{order_number}}
注文日時：{{ordered_at}}
注文者：{{customer_name}}

メニュー：{{cocktail_name}}
ベース：{{base_name}}
カテゴリ：{{category}}

■材料
{{ingredients}}

■作り方
{{recipe}}

■提供時のコツ
{{tips}}
```

EmailJSテンプレートの送信先メールアドレスは、
EmailJS管理画面側でまっきーのメールアドレスに設定してください。

## 起動方法

ローカルファイルを直接開くより、簡易Webサーバーで確認する方が安全です。

Pythonが入っている場合：

```bash
cd makky-bar
python3 -m http.server 8080
```

ブラウザで以下を開きます。

```text
http://localhost:8080
```

## 公開候補

- GitHub Pages
- Cloudflare Pages
- Netlify

公開する場合、EmailJS側で許可ドメインや送信制限を設定してください。
