import { useRouter } from "next/router"
import type { NextPage } from "next"
import Layout from "../../components/layout"
import DictionaryEntry from "../../components/molecules/DictionaryEntry"

import { verbs } from "../../data/verbs"
import { Verb } from "../../types"
import { getDictionary } from "../../utils/getForm/getDictionary"

const Home: NextPage = () => {
  const router = useRouter()
  const { slug } = router.query

  const findCondition = (verb: Verb) => {
    if (verb.type !== "irregular") return getDictionary({ verb }).kanji === slug
    return verb.dictionary.affirmative.kanji === slug
  }

  const verbIndex = verbs.findIndex(findCondition)
  if (verbIndex === -1) router.push("/dictionary")
  const verb = verbs[verbIndex]

  return (
    <Layout active="dictionary">
      <DictionaryEntry verb={verb} />
    </Layout>
  )
}

export default Home
