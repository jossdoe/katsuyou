import React from "react"
import { Verb } from "../../types"
import DictionaryEntry from "../atoms/DictionaryLink"

export type DictionaryGroupProps = {
  className?: string
  title: string
  verbs: Verb[]
}

const DictionaryGroup: React.FC<DictionaryGroupProps> = ({
  className,
  title,
  verbs,
}) => {
  return (
    <>
      {verbs.length > 0 && (
        <div className={className}>
          <h2 className="mb-4 text-center font-semibold text-slate-500">
            {title}
          </h2>
          <ul className="flex flex-col w-[14rem] mx-auto">
            {verbs.map((verb, index) => (
              <DictionaryEntry key={index} verb={verb} className="mb-2" />
            ))}
          </ul>
        </div>
      )}
    </>
  )
}

export default DictionaryGroup
