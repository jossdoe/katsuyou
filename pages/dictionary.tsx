import type { NextPage } from "next"
import Layout from "../components/layout"

import { verbs } from "../data/verbs"
import { getDictionary } from "../utils/getForm/getDictionary"

const Home: NextPage = () => {
  return (
    <Layout>
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center text-2xl">
        {verbs.map((verb, index) => (
          <ul key={index} className="mb-2">
            <li
              dangerouslySetInnerHTML={{
                __html: getDictionary({
                  verb,
                  negative: false,
                  tense: "non-past",
                }).html,
              }}
            />
          </ul>
        ))}
      </main>
    </Layout>
  )
}

export default Home
