import React from "react"
import { FaMinus, FaPlus } from "react-icons/fa"

export type InputNumberProps = {
  className?: string
  increaseByOne: () => void
  decreaseByOne: () => void
  currentValue: number
}

const InputNumber: React.FC<InputNumberProps> = ({
  className,
  increaseByOne,
  decreaseByOne,
  currentValue,
}) => {
  return (
    <div className={`flex items-center ${className}`}>
      <button
        className="bg-slate-200 text-slate-500 p-4 rounded-full transition-colors hover:bg-slate-300 active:bg-slate-400"
        onClick={decreaseByOne}
      >
        <FaMinus />
      </button>
      <div className="flex-1 font-bold text-2xl text-center text-slate-500">
        {currentValue}
      </div>
      <button
        className="bg-slate-200 text-slate-500 p-4 rounded-full transition-colors hover:bg-slate-300 active:bg-slate-400"
        onClick={increaseByOne}
      >
        <FaPlus />
      </button>
    </div>
  )
}

export default InputNumber
