import { Spellings, Verb } from "../../types"
import { getSpellings } from "./utils"

const godanSuffixes = {
  う: "って",
  つ: "って",
  る: "って",
  む: "んで",
  ぶ: "んで",
  ぬ: "んで",
  く: "いて",
  ぐ: "いで",
  す: "して",
}

type ArgsGetTe = {
  verb: Verb
}

export const getTe = ({ verb }: ArgsGetTe): Spellings => {
  const { base, type, ending } = verb
  let suffix = ""

  if (type === "ichidan") suffix = "て"
  if (type === "godan") suffix = godanSuffixes[ending]

  return getSpellings({ base, suffix })
}
