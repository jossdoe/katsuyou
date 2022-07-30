import React from "react"

export type DictionaryEntryRowProps = {
  className?: string
  title: string
  htmlAffirmative: string
  htmlNegative: string
}

const DictionaryEntryRow: React.FC<DictionaryEntryRowProps> = ({
  className,
  title,
  htmlAffirmative,
  htmlNegative,
}) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="flex-1 text-xs font-bold">{title}</div>
      <div
        className="flex-1"
        dangerouslySetInnerHTML={{ __html: htmlAffirmative }}
      />
      <div
        className="flex-1"
        dangerouslySetInnerHTML={{ __html: htmlNegative }}
      />
    </div>
  )
}

export default DictionaryEntryRow
