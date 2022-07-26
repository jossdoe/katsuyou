export type Spellings = {
  kana: string
  kanji: string
  html: string
}

export type VerbRegular = {
  type: "ichidan" | "godan"
  ending: "う" | "つ" | "る" | "む" | "ぶ" | "ぬ" | "く" | "ぐ" | "す"
  base: Spellings
}

// TODO
export type VerbIrregular = {
  type: "irregular"
  ending: "う" | "つ" | "る" | "む" | "ぶ" | "ぬ" | "く" | "ぐ" | "す"
  base: Spellings
}

export type Verb = {
  type: "ichidan" | "godan" | "irregular"
  ending: "う" | "つ" | "る" | "む" | "ぶ" | "ぬ" | "く" | "ぐ" | "す"
  base: Spellings
}
