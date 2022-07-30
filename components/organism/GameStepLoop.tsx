import React, { useState } from "react"
import { QuizAction, QuizState, Solutions } from "../../hooks/useQuiz"
import { Verb } from "../../types"
import { getDictionary } from "../../utils/getForm/getDictionary"
import { increaseLocalCounts } from "../../utils/localStorage"
import BaseButton from "../atoms/BaseButton"
import QuizInputField, {
  QuizInputFieldProps,
} from "../molecules/QuizInputField"

export type GameStepLoopProps = {
  dispatch: (value: QuizAction) => void
  currentVerbCount: number
  totalVerbCount: number
  currentVerb: Verb
  currentSolutions: Solutions
  currentStep: QuizState["currentStep"]
}

type InputValues = {
  [Property in keyof Solutions]: string
}

const GameStepLoop: React.FC<GameStepLoopProps> = ({
  dispatch,
  currentVerb,
  currentSolutions,
  currentStep,
  currentVerbCount,
  totalVerbCount,
}) => {
  const [inputValues, setInputValues] = useState<InputValues>({
    nai: "",
    past: "",
    pastNai: "",
    polite: "",
    politeNegative: "",
    politePast: "",
    politePastNegative: "",
    te: "",
  })

  function onChangeInputValues(form: keyof InputValues, value: string) {
    setInputValues({ ...inputValues, [form]: value })
  }

  function getValidationProp(
    form: keyof Solutions
  ): QuizInputFieldProps["validation"] {
    if (currentStep === "question") return "none"

    let solutionKana = currentSolutions[form].kana
    let solutionKanji = currentSolutions[form].kanji
    let userInput = inputValues[form]

    if (userInput === solutionKana) return "correct"
    if (userInput === solutionKanji) return "correct"
    return "incorrect"
  }

  function calculateCorrectConjugations() {
    let correctConjugations = 0

    for (const [form, spellings] of Object.entries(currentSolutions)) {
      const userInput = inputValues[form as keyof Solutions]
      const hasCorrectKana = spellings.kana === userInput
      const hasCorrectKanji = spellings.kanji === userInput
      if (hasCorrectKana || hasCorrectKanji)
        correctConjugations = correctConjugations + 1
    }

    return correctConjugations
  }

  return (
    <>
      <div className="w-20 mx-auto mb-4 bg-slate-300 text-center opacity-60 rounded-full">
        {currentVerbCount} / {totalVerbCount}
      </div>
      <div
        className="text-center text-4xl mb-6"
        dangerouslySetInnerHTML={{
          __html: getDictionary({ verb: currentVerb }).html,
        }}
      />
      <div className="w-[16rem] mx-auto mb-12">
        <QuizInputField
          className="mb-4"
          label="Nai-Form"
          value={inputValues["nai"]}
          onChange={(v) => onChangeInputValues("nai", v)}
          isDisabled={currentStep === "solution"}
          validation={getValidationProp("nai")}
          solutionHtml={currentSolutions.nai.html}
        />
        <QuizInputField
          className="mb-4"
          label="Past-Form"
          value={inputValues["past"]}
          onChange={(v) => onChangeInputValues("past", v)}
          isDisabled={currentStep === "solution"}
          validation={getValidationProp("past")}
          solutionHtml={currentSolutions.past.html}
        />
        <QuizInputField
          className="mb-4"
          label="Past-Form, negative"
          value={inputValues["pastNai"]}
          onChange={(v) => onChangeInputValues("pastNai", v)}
          isDisabled={currentStep === "solution"}
          validation={getValidationProp("pastNai")}
          solutionHtml={currentSolutions.pastNai.html}
        />
        <QuizInputField
          className="mb-4"
          label="Polite"
          value={inputValues["polite"]}
          onChange={(v) => onChangeInputValues("polite", v)}
          isDisabled={currentStep === "solution"}
          validation={getValidationProp("polite")}
          solutionHtml={currentSolutions.polite.html}
        />
        <QuizInputField
          className="mb-4"
          label="Polite, negative"
          value={inputValues["politeNegative"]}
          onChange={(v) => onChangeInputValues("politeNegative", v)}
          isDisabled={currentStep === "solution"}
          validation={getValidationProp("politeNegative")}
          solutionHtml={currentSolutions.politeNegative.html}
        />
        <QuizInputField
          className="mb-4"
          label="Polite, past"
          value={inputValues["politePast"]}
          onChange={(v) => onChangeInputValues("politePast", v)}
          isDisabled={currentStep === "solution"}
          validation={getValidationProp("politePast")}
          solutionHtml={currentSolutions.politePast.html}
        />
        <QuizInputField
          className="mb-4"
          label="Polite, past, negative"
          value={inputValues["politePastNegative"]}
          onChange={(v) => onChangeInputValues("politePastNegative", v)}
          isDisabled={currentStep === "solution"}
          validation={getValidationProp("politePastNegative")}
          solutionHtml={currentSolutions.politePastNegative.html}
        />
        <QuizInputField
          className="mb-4"
          label="Te-Form"
          value={inputValues["te"]}
          onChange={(v) => onChangeInputValues("te", v)}
          isDisabled={currentStep === "solution"}
          validation={getValidationProp("te")}
          solutionHtml={currentSolutions.te.html}
        />
      </div>
      <div className="text-center">
        {currentStep === "question" && (
          <BaseButton
            variant="grey"
            onClick={() => {
              const correctConjugations = calculateCorrectConjugations()
              increaseLocalCounts({
                verbs: correctConjugations === 8 ? 1 : 0,
                conjugations: correctConjugations,
              })
              dispatch({
                type: "SHOW_SOLUTION",
                payload: { correctConjugations },
              })
            }}
          >
            Check
          </BaseButton>
        )}
        {currentStep === "solution" && (
          <BaseButton
            variant="red"
            onClick={() => {
              setInputValues({
                nai: "",
                past: "",
                pastNai: "",
                polite: "",
                politeNegative: "",
                politePast: "",
                politePastNegative: "",
                te: "",
              })
              dispatch({ type: "NEXT_QUESTION" })
            }}
          >
            Next
          </BaseButton>
        )}
      </div>
    </>
  )
}

export default GameStepLoop
