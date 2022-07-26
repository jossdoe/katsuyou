import type { NextPage } from "next"
import Head from "next/head"
import Layout from "../components/layout"

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center text-3xl">
        index
      </main>
    </Layout>
  )
}

export default Home
