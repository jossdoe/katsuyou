import { Spellings, Verb } from "../../types"
import { getSpellings } from "./utils"

const godanConnector = {
  く: "き",
  す: "し",
  つ: "ち",
  ぬ: "に",
  む: "み",
  る: "り",
  ぐ: "ぎ",
  ぶ: "び",
  う: "い",
}

type ArgsGetPolite = {
  verb: Verb
  negative?: boolean
  tense?: "non-past" | "past"
}

export const getPolite = ({
  verb,
  negative = false,
  tense = "non-past",
}: ArgsGetPolite): Spellings => {
  const { type } = verb
  if (type === "irregular") {
    if (negative && tense === "past") return verb.politePast.negative
    if (negative && tense === "non-past") return verb.polite.negative
    if (!negative && tense === "past") return verb.politePast.affirmative
    return verb.polite.affirmative
  }

  const { base, ending } = verb
  let suffix = ""

  if (tense === "non-past") {
    if (type === "ichidan") suffix = "ます"
    if (type === "godan") suffix = `${godanConnector[ending]}ます`
    if (negative && type === "ichidan") suffix = "ません"
    if (negative && type === "godan") suffix = `${godanConnector[ending]}ません`
  }

  if (tense === "past") {
    if (type === "ichidan") suffix = "ました"
    if (type === "godan") suffix = `${godanConnector[ending]}ました`
    if (negative && type === "ichidan") suffix = "ませんでした"
    if (negative && type === "godan")
      suffix = `${godanConnector[ending]}ませんでした`
  }

  return getSpellings({ base, suffix })
}
