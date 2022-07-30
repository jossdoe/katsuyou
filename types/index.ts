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

export type VerbIrregular = {
  type: "irregular"
  dictionary: {
    affirmative: Spellings
    negative: Spellings
  }
  dictionaryPast: {
    affirmative: Spellings
    negative: Spellings
  }
  polite: {
    affirmative: Spellings
    negative: Spellings
  }
  politePast: {
    affirmative: Spellings
    negative: Spellings
  }
  te: {
    affirmative: Spellings
  }
}

export type Verb = VerbRegular | VerbIrregular
