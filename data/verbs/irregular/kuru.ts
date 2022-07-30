import { Verb } from "../../../types"

export const kuru: Verb = {
  type: "irregular",
  dictionary: {
    affirmative: {
      kana: "くる",
      kanji: "来る",
      html: "<ruby>来<rt>く</rt></ruby>る",
    },
    negative: {
      kana: "こない",
      kanji: "来ない",
      html: "<ruby>来<rt>こ</rt></ruby>ない",
    },
  },
  dictionaryPast: {
    affirmative: {
      kana: "きた",
      kanji: "来た",
      html: "<ruby>来<rt>き</rt></ruby>た",
    },
    negative: {
      kana: "こなかった",
      kanji: "来なかった",
      html: "<ruby>来<rt>こ</rt></ruby>なかった",
    },
  },
  polite: {
    affirmative: {
      kana: "きます",
      kanji: "来ます",
      html: "<ruby>来<rt>き</rt></ruby>ます",
    },
    negative: {
      kana: "きません",
      kanji: "来ません",
      html: "<ruby>来<rt>き</rt></ruby>ません",
    },
  },
  politePast: {
    affirmative: {
      kana: "きました",
      kanji: "来ました",
      html: "<ruby>来<rt>き</rt></ruby>ました",
    },
    negative: {
      kana: "きませんでした",
      kanji: "来ませんでした",
      html: "<ruby>来<rt>き</rt></ruby>ませんでした",
    },
  },
  te: {
    affirmative: {
      kana: "きて",
      kanji: "来て",
      html: "<ruby>来<rt>き</rt></ruby>て",
    },
  },
}
