import React from "react"
import { QuizAction } from "../../hooks/useQuiz"
import BaseButton from "../atoms/BaseButton"
import InputNumber from "../molecules/InputNumber"

export type GameStepStartProps = {
  dispatch: (value: QuizAction) => void
  verbCountValue: number
}

const GameStepStart: React.FC<GameStepStartProps> = ({
  dispatch,
  verbCountValue,
}) => {
  function decreaseVerbsByOne() {
    if (verbCountValue > 1) {
      dispatch({
        type: "SET_TOTAL_QUESTIONS",
        payload: verbCountValue - 1,
      })
    }
  }

  function increaseVerbsByOne() {
    if (verbCountValue < 20) {
      dispatch({
        type: "SET_TOTAL_QUESTIONS",
        payload: verbCountValue + 1,
      })
    }
  }

  return (
    <>
      <img className="block mx-auto mb-6" width="300" src="/start.png" />
      <h2 className="text-center mb-8 text-2xl font-semibold text-slate-500">
        Start Quiz
      </h2>
      <div className="mb-12">
        <div className="block w-[14rem] mx-auto">
          <div className="font-semibold text-slate-500 mb-2 text-center">
            Number of Verbs
          </div>
          <InputNumber
            className="w-40 mx-auto"
            currentValue={verbCountValue}
            decreaseByOne={decreaseVerbsByOne}
            increaseByOne={increaseVerbsByOne}
          />
        </div>
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
