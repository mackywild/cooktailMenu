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
    id: "metal-003",
    name: "インフェルノ・リフ",
    baseName: "Vodka Cassis Cola",
    category: "METAL",
    emoji: "🔥",
    color: "rgba(60, 20, 20, 0.65)",
    description: "漆黒の闇に深紅の旋律が響く。甘さの奥でウォッカが牙をむく、メタル魂を宿したダークカクテル。",
    strength: 3,
    sweetness: 4,
    ingredients: [
      "ウォッカ 30ml",
      "カシスリキュール 20ml",
      "コーラ 100ml",
      "レモン果汁 10ml",
      "氷 適量",
      "レモンスライス 1枚（任意）"
    ],
    recipe: [
      "ロンググラスいっぱいに氷を入れる",
      "ウォッカ30mlを注ぐ",
      "カシスリキュール20mlを注ぐ",
      "レモン果汁10mlを加える",
      "コーラ100mlをグラスの内側を伝わせるように静かに注ぐ",
      "バースプーンで底から1～2回だけ軽く混ぜる",
      "レモンスライスを飾って完成"
    ],
    tips: "コーラはよく冷やしておく。炭酸を逃がさないため混ぜすぎない。氷はグラスいっぱいに入れ、黒いストローを添えると見た目も映える。"
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
  },
  {
    id: "gin-001",
    name: "POISON FOG",
    baseName: "Blue Gin Tonic",
    category: "HORROR",
    emoji: "☠️",
    color: "rgba(40, 150, 255, 0.55)",
    description: "青白い毒霧が静かに広がる。爽やかな香りの裏に潜む危険な一杯。",
    strength: 3,
    sweetness: 2,
    ingredients: [
      "ジン 30ml",
      "ブルーキュラソー 20ml",
      "トニックウォーター 100ml",
      "レモン果汁 5ml",
      "氷 適量",
      "レモンスライス 1枚（任意）"
    ],
    recipe: [
      "グラスいっぱいに氷を入れる",
      "ジン30mlを注ぐ",
      "ブルーキュラソー20mlを加える",
      "レモン果汁5mlを入れる",
      "トニックウォーター100mlを静かに注ぐ",
      "バースプーンで1～2回だけ軽く混ぜる",
      "レモンスライスを添えて完成"
    ],
    tips: "混ぜすぎると炭酸が抜けるので注意。透明なグラスを使うと青色がより映える。"
  },
  {
    id: "gin-002",
    name: "MIDNIGHT KISS",
    baseName: "Gin Peach Soda",
    category: "UNDERGROUND",
    emoji: "💋",
    color: "rgba(255, 120, 170, 0.55)",
    description: "深夜二時、距離が近づく危険な一杯。甘い香りに油断は禁物。",
    strength: 2,
    sweetness: 4,
    ingredients: [
      "ジン 30ml",
      "ピーチリキュール 20ml",
      "炭酸水 80ml",
      "レモン果汁 10ml",
      "氷 適量"
    ],
    recipe: [
      "グラスいっぱいに氷を入れる",
      "ジン30mlを注ぐ",
      "ピーチリキュール20mlを加える",
      "レモン果汁10mlを入れる",
      "炭酸水80mlを静かに注ぐ",
      "底から1回だけ軽く混ぜる"
    ],
    tips: "炭酸は最後に注ぎ、混ぜるのは最小限。レモンを添えると香りが引き締まる。"
  },
  {
    id: "gin-003",
    name: "IRON SOUL",
    baseName: "Gin Buck",
    category: "METAL",
    emoji: "⚔️",
    color: "rgba(210, 180, 90, 0.45)",
    description: "鋼鉄の魂を宿す一杯。ジンジャーの刺激が全身を駆け抜ける。",
    strength: 3,
    sweetness: 2,
    ingredients: [
      "ジン 45ml",
      "ジンジャーエール 100ml",
      "レモン果汁 10ml",
      "氷 適量",
      "レモンスライス 1枚（任意）"
    ],
    recipe: [
      "グラスいっぱいに氷を入れる",
      "ジン45mlを注ぐ",
      "レモン果汁10mlを加える",
      "一度軽く混ぜる",
      "ジンジャーエール100mlを静かに注ぐ",
      "底から1回だけ軽く混ぜる",
      "レモンスライスを飾って完成"
    ],
    tips: "辛口ジンジャーエールがおすすめ。ジンジャーエールはよく冷やし、炭酸を逃がさないよう優しく混ぜる。"
  },
  {
    id: "gin-004",
    name: "FORBIDDEN",
    baseName: "Gin Cassis Soda",
    category: "UNDERGROUND",
    emoji: "🥀",
    color: "rgba(120, 40, 120, 0.60)",
    description: "禁断の紫が誘う妖艶な一杯。甘さの奥にジンの鋭さが潜む。",
    strength: 3,
    sweetness: 3,
    ingredients: [
      "ジン 30ml",
      "カシスリキュール 20ml",
      "炭酸水 80ml",
      "レモン果汁 5ml",
      "氷 適量"
    ],
    recipe: [
      "グラスいっぱいに氷を入れる",
      "ジン30mlを注ぐ",
      "カシスリキュール20mlを加える",
      "レモン果汁5mlを入れる",
      "炭酸水80mlを静かに注ぐ",
      "底から1回だけ軽く混ぜる"
    ],
    tips: "透明なグラスを使うと紫色が映える。レモンを少し絞ると後味がすっきりする。"
  },
  {
    id: "metal-004",
    name: "METAL STORM",
    baseName: "Blue Vodka Martini Style",
    category: "METAL",
    emoji: "⚡",
    color: "rgba(40, 120, 255, 0.55)",
    description: "蒼き雷鳴が轟く、マッキーバー最強の一杯。鋼鉄の魂を呼び覚ますシグネチャーカクテル。",
    strength: 4,
    sweetness: 2,
    ingredients: [
      "ウォッカ 30ml",
      "ジン 15ml",
      "ブルーキュラソー 15ml",
      "レモン果汁 15ml",
      "ガムシロップ 5ml",
      "氷 適量",
      "レモンスライス 1枚（任意）"
    ],
    recipe: [
      "シェイカーに氷をたっぷり入れる（6～7割）",
      "ウォッカ30ml、ジン15mlを注ぐ",
      "ブルーキュラソー15mlを加える",
      "レモン果汁15mlとガムシロップ5mlを加える",
      "約15秒しっかりシェイクする",
      "シェイカーの底を軽く叩いて固着を外す",
      "冷えたグラスへ注ぎ、レモンスライスを飾って完成"
    ],
    tips: "シェイクは約15秒。ブルーキュラソーの鮮やかな青色を活かすため透明なグラスがおすすめ。グラスを事前に冷やすと口当たりが格段に良くなる。"
  }
];
