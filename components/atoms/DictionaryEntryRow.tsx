import React from "react"

export type DictionaryEntryRowProps = {
  className?: string
  title: string
  htmlAffirmative: string
  htmlNegative: string
  hasBackground?: boolean
}

const DictionaryEntryRow: React.FC<DictionaryEntryRowProps> = ({
  className,
  title,
  htmlAffirmative,
  htmlNegative,
  hasBackground = false,
}) => {
  return (
    <div className={`flex items-stretch ${className}`}>
      <div
        className={`flex-[2] text-xs font-bold mr-1 p-2 ${
          hasBackground ? "bg-slate-50" : ""
        }`}
      >
        {title}
      </div>
      <div
        className={`flex-[3] mr-1 p-2 pt-3 pb-1 ${
          hasBackground ? "bg-slate-50" : ""
        }`}
        dangerouslySetInnerHTML={{ __html: htmlAffirmative }}
      />
      <div
        className={`flex-[3] p-2 pt-3 pb-1 ${
          hasBackground ? "bg-slate-50" : ""
        }`}
        dangerouslySetInnerHTML={{ __html: htmlNegative }}
      />
    </div>
  )
}

export default DictionaryEntryRow
