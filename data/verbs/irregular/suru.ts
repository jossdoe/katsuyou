import { Verb } from "../../../types"

export const suru: Verb = {
  type: "irregular",
  dictionary: {
    affirmative: {
      kana: "する",
      kanji: "する",
      html: "する",
    },
    negative: {
      kana: "しない",
      kanji: "しない",
      html: "しない",
    },
  },
  dictionaryPast: {
    affirmative: {
      kana: "した",
      kanji: "した",
      html: "した",
    },
    negative: {
      kana: "しなかった",
      kanji: "しなかった",
      html: "しなかった",
    },
  },
  polite: {
    affirmative: {
      kana: "します",
      kanji: "します",
      html: "します",
    },
    negative: {
      kana: "しません",
      kanji: "しません",
      html: "しません",
    },
  },
  politePast: {
    affirmative: {
      kana: "しました",
      kanji: "しました",
      html: "しました",
    },
    negative: {
      kana: "しませんでした",
      kanji: "しませんでした",
      html: "しませんでした",
    },
  },
  te: {
    affirmative: {
      kana: "して",
      kanji: "して",
      html: "して",
    },
  },
}
