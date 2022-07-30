export function getLocalCounts() {
  const localVerbs = localStorage.getItem("totalVerbs")
  const localConjugations = localStorage.getItem("totalConjugations")

  return {
    totalVerbs: parseInt(localVerbs || "0"),
    totalConjugations: parseInt(localConjugations || "0"),
  }
}

type LocalCounts = {
  verbs: number
  conjugations: number
}

export function increaseLocalCounts({ verbs, conjugations }: LocalCounts) {
  const { totalVerbs, totalConjugations } = getLocalCounts()

  const newCountVerbs = totalVerbs + verbs
  const newCountConjugations = totalConjugations + conjugations

  localStorage.setItem("totalVerbs", newCountVerbs.toString())
  localStorage.setItem("totalConjugations", newCountConjugations.toString())
}
