import React from "react"
import DictionaryEntryRow from "../atoms/DictionaryEntryRow"
import { Verb } from "../../types"

import { getDictionary } from "../../utils/getForm/getDictionary"
import { getPolite } from "../../utils/getForm/getPolite"
import { getTe } from "../../utils/getForm/getTe"

export type DictionaryEntryProps = {
  className?: string
  verb: Verb
}

type Conjugation = {
  title: string
  htmlAffirmative: string
  htmlNegative: string
}

const DictionaryEntry: React.FC<DictionaryEntryProps> = ({
  className,
  verb,
}) => {
  const conjugations: Conjugation[] = [
    {
      title: "Dictionary",
      htmlAffirmative: getDictionary({ verb }).html,
      htmlNegative: getDictionary({ verb, negative: true }).html,
    },
    {
      title: "Past",
      htmlAffirmative: getDictionary({ verb, tense: "past" }).html,
      htmlNegative: getDictionary({ verb, tense: "past", negative: true }).html,
    },
    {
      title: "Polite",
      htmlAffirmative: getPolite({ verb }).html,
      htmlNegative: getPolite({ verb, negative: true }).html,
    },
    {
      title: "Polite, past",
      htmlAffirmative: getPolite({ verb, tense: "past" }).html,
      htmlNegative: getPolite({ verb, tense: "past", negative: true }).html,
    },
    {
      title: "Te-Form",
      htmlAffirmative: getTe({ verb }).html,
      htmlNegative: "",
    },
  ]

  return (
    <div className={className}>
      <div className={`flex font-bold text-xs mb-2 text-center`}>
        <div className="flex-[2] mr-1 p-2" />
        <div className="flex-[3] mr-1 p-2">Affirmative</div>
        <div className="flex-[3] p-2">Negative</div>
      </div>
      {conjugations.map(({ title, htmlAffirmative, htmlNegative }) => (
        <DictionaryEntryRow
          key={title}
          title={title}
          htmlAffirmative={htmlAffirmative}
          htmlNegative={htmlNegative}
          className="mb-1"
          hasBackground
        />
      ))}
    </div>
  )
}

export default DictionaryEntry
