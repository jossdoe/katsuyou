import React from "react"

export type BaseCounterProps = {
  className?: string
  title: string
  rows: Array<{ text: string; count: number }>
}

const BaseCounter: React.FC<BaseCounterProps> = ({
  className,
  title,
  rows,
}) => {
  return (
    <div className={`bg-white text-slate-600 py-4 px-5 rounded ${className}`}>
      <div className="font-bold text-center mb-4">{title}</div>
      {rows.map((row) => (
        <div key={row.text} className="flex">
          <div className="flex-1 text-left">{row.text}</div>
          <div className="text-right">{row.count}</div>
        </div>
      ))}
    </div>
  )
}

export default BaseCounter
