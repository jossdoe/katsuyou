import Link from "next/link"
import React from "react"
import { Verb } from "../../types"
import { getDictionary } from "../../utils/getForm/getDictionary"

export type DictionaryLinkProps = {
  className?: string
  verb: Verb
}

const DictionaryLink: React.FC<DictionaryLinkProps> = ({ className, verb }) => {
  return (
    <Link href={`/dictionary/${getDictionary({ verb }).kanji}`}>
      <a
        className={`block bg-slate-200 text-center py-1 px-4 rounded-xl transition-colors text-slate-700 hover:bg-slate-300 active:bg-slate-400 ${className}`}
      >
        <li
          dangerouslySetInnerHTML={{ __html: getDictionary({ verb }).html }}
        />
      </a>
    </Link>
  )
}

export default DictionaryLink
