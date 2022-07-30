import Link from "next/link"
import React from "react"
import { QuizAction } from "../../hooks/useQuiz"
import BaseButton from "../atoms/BaseButton"
import BaseCounter from "../atoms/BaseCounter"

export type GameStepResultsProps = {
  dispatch: (value: QuizAction) => void
  correctVerbCount: number
  correctConjugationCount: number
}

const GameStepResults: React.FC<GameStepResultsProps> = ({
  dispatch,
  correctVerbCount,
  correctConjugationCount,
}) => {
  const counterRows = [
    { text: "Perfect Verbs:", count: correctVerbCount },
    { text: "Correct Conjugations:", count: correctConjugationCount },
  ]

  return (
    <>
      <img className="block mx-auto mb-6" width="300" src="/results.png" />
      <BaseCounter
        className="w-[18rem] mx-auto mb-10"
        title="Score"
        rows={counterRows}
      />
      <div className="flex flex-col w-[18rem] mx-auto">
        <BaseButton
          variant="red"
          onClick={() => dispatch({ type: "RESET_QUIZ" })}
        >
          Restart Quiz
        </BaseButton>
        <BaseButton className="mt-4" variant="grey" href="/">
          Go Home
        </BaseButton>
      </div>
    </>
  )
}

export default GameStepResults
