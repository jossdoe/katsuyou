import { Spellings } from "../../types"

type ArgsGetSpellings = {
  base: Spellings
  suffix: string
}

export const getSpellings = ({ base, suffix }: ArgsGetSpellings): Spellings => {
  return {
    kana: `${base.kana}${suffix}`,
    kanji: `${base.kanji}${suffix}`,
    html: `${base.html}${suffix}`,
  }
}
