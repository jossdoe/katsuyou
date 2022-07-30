import React, { useEffect, useState } from "react"
import type { NextPage } from "next"
import Layout from "../components/layout"
import { getLocalCounts } from "../utils/localStorage"
import BaseButton from "../components/atoms/BaseButton"
import BaseCounter from "../components/atoms/BaseCounter"
import { getRandomKaomoji } from "../utils/getRandomKaomoji"

const Home: NextPage = () => {
  const [isKaomojiVisible, setIsKaomojiVisible] = useState(true)
  const [kaomoji, setKaomoji] = useState("٩(｡•́‿•̀｡)۶")

  const kaomojiOpacity = isKaomojiVisible ? "opacity-100" : "opacity-0"

  const [verbCount, setVerbCount] = useState(0)
  const [conjugationCount, setConjugationCount] = useState(0)

  useEffect(() => {
    const { totalVerbs, totalConjugations } = getLocalCounts()
    setVerbCount(totalVerbs)
    setConjugationCount(totalConjugations)

    const interval = setInterval(async () => {
      setIsKaomojiVisible(false)
      await new Promise((r) => setTimeout(r, 500))
      setKaomoji(getRandomKaomoji(kaomoji))
      setIsKaomojiVisible(true)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const counterRows = [
    { text: "Correct Verbs:", count: verbCount },
    { text: "Correct Conjugations:", count: conjugationCount },
  ]

  return (
    <Layout>
      <div
        className={`text-center text-2xl mt-4 mb-8 transition-opacity duration-500 ${kaomojiOpacity}`}
      >
        {kaomoji}
      </div>
      <BaseCounter
        className="w-64 mx-auto mb-12"
        title="Total Score"
        rows={counterRows}
      />
      <div className="flex flex-col w-64 mx-auto">
        <BaseButton href="/quiz" variant="red">
          Start Quiz
        </BaseButton>
        <BaseButton className="mt-4" href="/dictionary" variant="grey">
          See Dictionary
        </BaseButton>
      </div>
    </Layout>
  )
}

export default Home
