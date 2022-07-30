import { Verb } from "../../../types"

export const iku: Verb = {
  type: "irregular",
  dictionary: {
    affirmative: {
      kana: "いく",
      kanji: "行く",
      html: "<ruby>行<rt>い</rt></ruby>く",
    },
    negative: {
      kana: "いかない",
      kanji: "行かない",
      html: "<ruby>行<rt>い</rt></ruby>かない",
    },
  },
  dictionaryPast: {
    affirmative: {
      kana: "いった",
      kanji: "行った",
      html: "<ruby>行<rt>い</rt></ruby>った",
    },
    negative: {
      kana: "いかなかった",
      kanji: "行かなかった",
      html: "<ruby>行<rt>い</rt></ruby>かなかった",
    },
  },
  polite: {
    affirmative: {
      kana: "いきます",
      kanji: "行きます",
      html: "<ruby>行<rt>い</rt></ruby>きます",
    },
    negative: {
      kana: "いきません",
      kanji: "行きません",
      html: "<ruby>行<rt>い</rt></ruby>きません",
    },
  },
  politePast: {
    affirmative: {
      kana: "いきました",
      kanji: "行きました",
      html: "<ruby>行<rt>い</rt></ruby>きました",
    },
    negative: {
      kana: "いきませんでした",
      kanji: "行きませんでした",
      html: "<ruby>行<rt>い</rt></ruby>きませんでした",
    },
  },
  te: {
    affirmative: {
      kana: "いって",
      kanji: "行って",
      html: "<ruby>行<rt>い</rt></ruby>って",
    },
  },
}
