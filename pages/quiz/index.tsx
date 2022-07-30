import React from "react"
import type { NextPage } from "next"
import Layout from "../../components/layout"
import { useQuiz } from "../../hooks/useQuiz"
import GameStepStart from "../../components/organism/GameStepStart"
import GameStepLoop from "../../components/organism/GameStepLoop"
import GameStepResults from "../../components/organism/GameStepResults"

const Quiz: NextPage = () => {
  const {
    dispatch,
    currentVerb,
    currentSolutions,
    totalVerbCount,
    currentVerbCount,
    currentStep,
    correctVerbCount,
    correctConjugationCount,
  } = useQuiz()

  return (
    <Layout active="quiz">
      {currentStep === "start" && (
        <GameStepStart dispatch={dispatch} verbCountValue={totalVerbCount} />
      )}
      {(currentStep === "question" || currentStep === "solution") && (
        <GameStepLoop
          dispatch={dispatch}
          currentVerbCount={currentVerbCount}
          totalVerbCount={totalVerbCount}
          currentStep={currentStep}
          currentSolutions={currentSolutions}
          currentVerb={currentVerb}
        />
      )}
      {currentStep === "results" && (
        <GameStepResults
          dispatch={dispatch}
          correctVerbCount={correctVerbCount}
          correctConjugationCount={correctConjugationCount}
        />
      )}
    </Layout>
  )
}

export default Quiz
