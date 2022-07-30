import { Spellings, Verb } from "../types"
import { useReducer } from "react"
import { getRandomVerbs } from "../utils/getRandomVerbs"
import { verbs } from "../data/verbs"
import { getDictionary } from "../utils/getForm/getDictionary"
import { getPolite } from "../utils/getForm/getPolite"
import { getTe } from "../utils/getForm/getTe"

export type QuizState = {
  verbList: Verb[]
  currentVerbIndex: number
  currentStep: "start" | "question" | "solution" | "results"
  correctVerbCount: number
  correctConjugationCount: number
}

export type QuizAction =
  | { type: "SET_TOTAL_QUESTIONS"; payload: number }
  | { type: "START_QUIZ" }
  | { type: "NEXT_QUESTION" }
  | { type: "SHOW_SOLUTION"; payload: { correctConjugations: number } }
  | { type: "RESET_QUIZ" }

export type Solutions = {
  nai: Spellings
  past: Spellings
  pastNai: Spellings
  polite: Spellings
  politeNegative: Spellings
  politePast: Spellings
  politePastNegative: Spellings
  te: Spellings
}

function getInitialState(): QuizState {
  return {
    verbList: getRandomVerbs(verbs, 3),
    currentVerbIndex: 0,
    currentStep: "start",
    correctVerbCount: 0,
    correctConjugationCount: 0,
  }
}

function reducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case "SET_TOTAL_QUESTIONS": {
      return {
        ...state,
        verbList: getRandomVerbs(verbs, action.payload),
      }
    }
    case "START_QUIZ": {
      return {
        ...state,
        currentStep: "question",
        currentVerbIndex: 0,
      }
    }
    case "NEXT_QUESTION": {
      if (state.currentVerbIndex + 1 < state.verbList.length) {
        return {
          ...state,
          currentStep: "question",
          currentVerbIndex: state.currentVerbIndex + 1,
        }
      }

      return {
        ...state,
        currentStep: "results",
      }
    }
    case "SHOW_SOLUTION": {
      const correctConjugationCount =
        state.correctConjugationCount + action.payload.correctConjugations

      const isFullyCorrect = action.payload.correctConjugations === 8

      const correctVerbCount = isFullyCorrect
        ? state.correctVerbCount + 1
        : state.correctVerbCount

      return {
        ...state,
        currentStep: "solution",
        correctConjugationCount,
        correctVerbCount,
      }
    }
    case "RESET_QUIZ": {
      return getInitialState()
    }
    default: {
      return state
    }
  }
}

export function useQuiz() {
  const [state, dispatch] = useReducer(reducer, getInitialState())

  const totalVerbCount = state.verbList.length
  const currentVerbCount = state.currentVerbIndex + 1
  const currentVerb = state.verbList[state.currentVerbIndex]
  const currentSolutions: Solutions = {
    nai: getDictionary({ verb: currentVerb, negative: true }),
    past: getDictionary({ verb: currentVerb, tense: "past" }),
    pastNai: getDictionary({
      verb: currentVerb,
      negative: true,
      tense: "past",
    }),
    polite: getPolite({ verb: currentVerb }),
    politeNegative: getPolite({ verb: currentVerb, negative: true }),
    politePast: getPolite({ verb: currentVerb, tense: "past" }),
    politePastNegative: getPolite({
      verb: currentVerb,
      negative: true,
      tense: "past",
    }),
    te: getTe({ verb: currentVerb }),
  }

  return {
    ...state,
    dispatch,
    totalVerbCount,
    currentVerbCount,
    currentVerb,
    currentSolutions,
  }
}
