import { Verb } from "../types"

export function getRandomVerbs(arr: Verb[], num: number) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, num)
}
