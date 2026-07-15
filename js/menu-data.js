/**
 * MAKKY BAR メニューデータ
 *
 * メニューを追加する場合は、この配列にオブジェクトを追加してください。
 * strength / sweetness は1～5です。
 */
const COCKTAIL_MENU = [
  {
    id: "metal-001",
    name: "アイアンスクリュー",
    baseName: "Screwdriver",
    category: "METAL",
    emoji: "🍊",
    color: "rgba(255, 125, 0, 0.58)",
    description: "鋼鉄のドライバーで理性を締め上げる、爽快なオレンジカクテル。",
    strength: 3,
    sweetness: 3,
    ingredients: [
      "ウォッカ 45ml",
      "100％オレンジジュース 120ml",
      "氷 適量",
      "オレンジスライス 1枚（任意）"
    ],
    recipe: [
      "冷やしたロンググラスいっぱいに氷を入れる",
      "ウォッカ45mlを注ぐ",
      "オレンジジュース120mlをゆっくり注ぐ",
      "バースプーンで底から2～3回だけ軽く混ぜる",
      "オレンジスライスを飾って提供する"
    ],
    tips: "ジュースとグラスを事前に冷やす。氷は多めにし、混ぜすぎない。"
  },
  {
    id: "metal-002",
    name: "ヘルファイア・リフ",
    baseName: "Vodka Cranberry",
    category: "METAL",
    emoji: "🔥",
    color: "rgba(255, 25, 32, 0.58)",
    description: "真紅の炎と甘酸っぱさが駆け抜ける、ライブ開幕用の一杯。",
    strength: 3,
    sweetness: 3,
    ingredients: [
      "ウォッカ 30ml",
      "クランベリージュース 90ml",
      "レモン果汁 10ml",
      "グレナデンシロップ 5ml",
      "氷 適量"
    ],
    recipe: [
      "シェイカーに氷を入れる",
      "ウォッカ、クランベリージュース、レモン果汁を入れる",
      "8～10秒ほど強くシェイクする",
      "氷を入れたグラスに注ぐ",
      "グレナデンを最後に静かに落とす"
    ],
    tips: "最後のグレナデンは混ぜず、血のような濃淡を残す。"
  },
  {
    id: "horror-001",
    name: "ブラッド・タイプ・ゼロ",
    baseName: "Cassis Orange",
    category: "HORROR",
    emoji: "🩸",
    color: "rgba(150, 0, 18, 0.72)",
    description: "輸血パックから抜き取ったような、濃厚で飲みやすい赤。",
    strength: 2,
    sweetness: 4,
    ingredients: [
      "カシスリキュール 30ml",
      "100％オレンジジュース 100ml",
      "グレナデンシロップ 5ml",
      "氷 適量"
    ],
    recipe: [
      "グラスいっぱいに氷を入れる",
      "カシスリキュール30mlを注ぐ",
      "オレンジジュース100mlを静かに注ぐ",
      "バースプーンで1～2回だけ軽く混ぜる",
      "グレナデンをグラス内側に沿わせて落とす"
    ],
    tips: "完全に均一にせず、赤と橙のグラデーションを残すと不気味に映える。"
  },
  {
    id: "horror-002",
    name: "ゾンビ脳髄ソーダ",
    baseName: "Melon Soda Cocktail",
    category: "HORROR",
    emoji: "🧟",
    color: "rgba(34, 215, 83, 0.5)",
    description: "毒々しい緑に白い脳髄が漂う、見た目全振りの甘口カクテル。",
    strength: 2,
    sweetness: 5,
    ingredients: [
      "メロンリキュール 30ml",
      "炭酸水 90ml",
      "カルピス原液 10ml",
      "レモン果汁 5ml",
      "氷 適量"
    ],
    recipe: [
      "氷を入れたグラスにメロンリキュールを注ぐ",
      "炭酸水を静かに加える",
      "レモン果汁を入れ、1回だけ軽く混ぜる",
      "カルピス原液を高い位置から少量ずつ垂らす"
    ],
    tips: "炭酸水を入れた後は混ぜすぎない。カルピスの白い筋を脳髄として残す。"
  },
  {
    id: "underground-001",
    name: "ファースト・タッチ",
    baseName: "Peach Calpis Fizz",
    category: "UNDERGROUND",
    emoji: "🍑",
    color: "rgba(255, 105, 170, 0.5)",
    description: "甘く、柔らかく、気づいた時には距離がおかしくなっている。",
    strength: 2,
    sweetness: 5,
    ingredients: [
      "ピーチリキュール 30ml",
      "カルピスウォーター 80ml",
      "炭酸水 40ml",
      "レモン果汁 5ml",
      "氷 適量"
    ],
    recipe: [
      "グラスいっぱいに氷を入れる",
      "ピーチリキュールとカルピスウォーターを注ぐ",
      "レモン果汁を加えて2回ほど混ぜる",
      "炭酸水を静かに注ぐ",
      "仕上げに1回だけ持ち上げるように混ぜる"
    ],
    tips: "炭酸は最後。ストローを添え、桃またはレモンを飾ると店らしくなる。"
  },
  {
    id: "underground-002",
    name: "午前二時のブラックアウト",
    baseName: "Kahlua Coke",
    category: "UNDERGROUND",
    emoji: "🌑",
    color: "rgba(87, 50, 24, 0.62)",
    description: "コーヒーの甘さに油断した者から記憶を失う、深夜限定の黒。",
    strength: 3,
    sweetness: 4,
    ingredients: [
      "カルーア 30ml",
      "ウォッカ 15ml",
      "コーラ 90ml",
      "レモン果汁 5ml",
      "氷 適量"
    ],
    recipe: [
      "氷を入れたグラスにカルーアとウォッカを注ぐ",
      "レモン果汁を加え、軽く混ぜる",
      "冷えたコーラをグラス内側に沿わせて注ぐ",
      "炭酸を逃がさないよう1回だけ混ぜる"
    ],
    tips: "甘くて度数を感じにくいため、提供時に強めであることを伝える。"
  }
];
