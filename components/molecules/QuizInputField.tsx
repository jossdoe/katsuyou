import React from "react"
import { toKana } from "wanakana"

export type QuizInputFieldProps = {
  className?: string
  label: string
  value: string
  onChange: (value: string) => void
  isDisabled?: boolean
  validation: "correct" | "incorrect" | "none"
  solutionHtml: string
}

const QuizInputField: React.FC<QuizInputFieldProps> = ({
  className,
  label,
  value,
  onChange,
  isDisabled,
  validation,
  solutionHtml,
}) => {
  function onChangeWithKana(e: React.ChangeEvent<HTMLInputElement>) {
    const kana = toKana(e.currentTarget.value, { IMEMode: true })
    onChange(kana)
  }

  const labelCorrect = `${label} ✅`
  const labelIncorrect = `${label} ❌`

  return (
    <div className={`text-center mb-8 ${className}`}>
      <label
        className="block font-semibold text-slate-500 mb-1"
        htmlFor={label}
      >
        {validation === "none" && label}
        {validation === "correct" && labelCorrect}
        {validation === "incorrect" && labelIncorrect}
      </label>
      <input
        id={label}
        type="text"
        value={value}
        onChange={onChangeWithKana}
        disabled={isDisabled}
        autoComplete="off"
        className="block bg-white px-4 py-2 rounded-lg border border-slate-400 w-full shadow-inner text-center placeholder:text-center disabled:bg-slate-200"
        placeholder="Answer"
      />
      {validation === "incorrect" && (
        <div
          className="bg-white mt-2 p-4 rounded-lg"
          dangerouslySetInnerHTML={{ __html: solutionHtml }}
        />
      )}
    </div>
  )
}

export default QuizInputField
