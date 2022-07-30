const kaomoji: string[] = [
  "٩(◕‿◕｡)۶",
  "(｡･ω･｡)",
  "ヽ(*・ω・)ﾉ",
  "(◕‿◕)",
  "٩(◕‿◕)۶",
  "\\(^ヮ^)/",
  "٩(｡•́‿•̀｡)۶",
  "(￢‿￢ )",
  "(´｡• ᵕ •｡`)",
  "(.❛ ᴗ ❛.)",
  "( ˙꒳​˙ )",
  "(^０^)ノ",
  "|･ω･)",
  "|ω･)ﾉ",
  "o(^◇^)o",
  "o(〃＾▽＾〃)o",
  "ヽ( ★ω★)ノ",
  "ヽ(｡･ω･｡)ﾉ",
  "≧ω≦",
  "٩(^ᴗ^)۶",
  "٩(θ‿θ)۶",
  "٩(●ᴗ●)۶",
  "*＼( *ω*)┓",
  "ﾟ･✿ヾ╲(｡◕‿◕｡)╱✿･ﾟ",
  "（⌒▽⌒ゞ",
  "⊂( ・ ̫・)⊃",
  "( ･ᴗ･̥̥̥ )",
  "(　◠ ◡ ◠　)",
  "(●⌃ٹ⌃)",
  "ヽ(*≧ω≦)ﾉ",
]

function getRandomKaomoji(current?: string): string {
  const newKaomoji = kaomoji[Math.floor(Math.random() * kaomoji.length)]

  if (current === newKaomoji) return getRandomKaomoji(newKaomoji)
  return newKaomoji
}

export { getRandomKaomoji }
