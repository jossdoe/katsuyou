import React from "react"
import { QuizAction } from "../../hooks/useQuiz"
import BaseButton from "../atoms/BaseButton"

export type GameStepStartProps = {
  dispatch: (value: QuizAction) => void
  verbCountValue: number
}

const GameStepStart: React.FC<GameStepStartProps> = ({
  dispatch,
  verbCountValue,
}) => {
  return (
    <>
      <img className="block mx-auto mb-6" width="300" src="/start.png" />
      <h2 className="text-center mb-8 text-2xl font-semibold text-slate-500">
        Start Quiz
      </h2>
      <div className="mb-12">
        <label>
          <label className="block w-[14rem] mx-auto text-center">
            <div className="font-semibold text-slate-500 mb-1">
              Number of Verbs
            </div>
            <input
              className="block bg-white mb-8 px-4 py-2 rounded-lg border border-slate-400 w-full shadow-inner text-center placeholder:text-center"
              type="number"
              value={verbCountValue}
              min="1"
              onChange={(e) =>
                dispatch({
                  type: "SET_TOTAL_QUESTIONS",
                  payload: parseInt(e.currentTarget.value),
                })
              }
            />
          </label>
        </label>
      </div>
      <div className="text-center">
        <BaseButton
          variant="red"
          onClick={() => dispatch({ type: "START_QUIZ" })}
        >
          Start
        </BaseButton>
      </div>
    </>
  )
}

export default GameStepStart
