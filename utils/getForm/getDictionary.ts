import { Spellings, Verb } from "../../types"
import { getSpellings } from "./utils"

const godanNegative = {
  く: "か",
  す: "さ",
  つ: "た",
  ぬ: "な",
  む: "ま",
  る: "ら",
  ぐ: "が",
  ぶ: "ば",
  う: "わ",
}

const godanPast = {
  う: "った",
  つ: "った",
  る: "った",
  む: "んだ",
  ぶ: "んだ",
  ぬ: "んだ",
  く: "いた",
  ぐ: "いだ",
  す: "した",
}

type ArgsGetDictionary = {
  verb: Verb
  negative?: boolean
  tense?: "non-past" | "past"
}

export const getDictionary = ({
  verb,
  negative = false,
  tense = "non-past",
}: ArgsGetDictionary): Spellings => {
  const { base, type, ending } = verb

  let suffix: string = ""

  if (tense === "non-past") {
    suffix = ending
    if (negative && type === "ichidan") suffix = "ない"
    if (negative && type === "godan") suffix = `${godanNegative[ending]}ない`
  }

  if (tense === "past") {
    if (type === "ichidan") suffix = "た"
    if (type === "godan") suffix = godanPast[ending]
    if (negative && type === "ichidan") suffix = "なかった"
    if (negative && type === "godan")
      suffix = `${godanNegative[ending]}なかった`
  }

  return getSpellings({ base, suffix })
}
