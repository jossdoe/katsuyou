import type { GetServerSideProps, NextPage } from "next"
import Layout from "../../components/layout"
import DictionaryEntry from "../../components/molecules/DictionaryEntry"

import { verbs } from "../../data/verbs"
import { Verb } from "../../types"
import { getDictionary } from "../../utils/getForm/getDictionary"

type DictProps = {
  verb: Verb
}

const Home: NextPage<DictProps> = ({ verb }) => {
  return (
    <Layout active="dictionary">
      <DictionaryEntry verb={verb} />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.params?.slug || "404"

  const findCondition = (verb: Verb) => {
    if (verb.type !== "irregular") return getDictionary({ verb }).kanji === slug
    return verb.dictionary.affirmative.kanji === slug
  }

  const verbIndex = verbs.findIndex(findCondition)

  if (verbIndex === -1) {
    return {
      redirect: {
        destination: "/dictionary",
        permanent: false,
      },
    }
  }

  const verb = verbs[verbIndex]

  return {
    props: {
      verb,
    },
  }
}

export default Home
