import React, { useState } from "react"
import type { NextPage } from "next"
import Layout from "../../components/layout"
import DictionaryGroup from "../../components/molecules/DictionaryGroup"
import { toKana } from "wanakana"

import {
  irregularVerbs,
  ichidanVerbs,
  uGodanVerbs,
  tsuGodanVerbs,
  ruGodanVerbs,
  muGodanVerbs,
  buGodanVerbs,
  nuGodanVerbs,
  kuGodanVerbs,
  guGodanVerbs,
  suGodanVerbs,
} from "../../data/verbs"
import { Verb } from "../../types"
import { getDictionary } from "../../utils/getForm/getDictionary"

const Home: NextPage = () => {
  const [searchValue, setSearchValue] = useState("")

  function filterVerbs(verbList: Verb[]) {
    if (searchValue.length > 0) {
      return verbList.filter((value) => {
        return (
          getDictionary({ verb: value }).kana.includes(searchValue) ||
          getDictionary({ verb: value }).kanji.includes(searchValue)
        )
      })
    }

    return verbList
  }

  function onChangeSearchInput(e: React.ChangeEvent<HTMLInputElement>) {
    const kana = toKana(e.currentTarget.value, { IMEMode: true })
    setSearchValue(kana)
  }

  const groupStyles = "mb-8"

  return (
    <Layout active="dictionary">
      <img className="block mx-auto mb-8" src="/dictionary.png" width="100px" />
      <input
        className="block bg-white mb-8 mx-auto px-4 py-2 rounded-lg border border-slate-400 w-[14rem] shadow-inner placeholder:text-center"
        type="text"
        value={searchValue}
        onChange={onChangeSearchInput}
        placeholder="Search"
      />
      <DictionaryGroup
        className={groupStyles}
        title="Irregular"
        verbs={filterVerbs(irregularVerbs)}
      />
      <DictionaryGroup
        className={groupStyles}
        title="Ichidan"
        verbs={filterVerbs(ichidanVerbs)}
      />
      <DictionaryGroup
        className={groupStyles}
        title="る"
        verbs={filterVerbs(ruGodanVerbs)}
      />
      <DictionaryGroup
        className={groupStyles}
        title="う"
        verbs={filterVerbs(uGodanVerbs)}
      />
      <DictionaryGroup
        className={groupStyles}
        title="つ"
        verbs={filterVerbs(tsuGodanVerbs)}
      />
      <DictionaryGroup
        className={groupStyles}
        title="む"
        verbs={filterVerbs(muGodanVerbs)}
      />
      <DictionaryGroup
        className={groupStyles}
        title="ぶ"
        verbs={filterVerbs(buGodanVerbs)}
      />
      <DictionaryGroup
        className={groupStyles}
        title="ぬ"
        verbs={filterVerbs(nuGodanVerbs)}
      />
      <DictionaryGroup
        className={groupStyles}
        title="く"
        verbs={filterVerbs(kuGodanVerbs)}
      />
      <DictionaryGroup
        className={groupStyles}
        title="ぐ"
        verbs={filterVerbs(guGodanVerbs)}
      />
      <DictionaryGroup
        className={groupStyles}
        title="す"
        verbs={filterVerbs(suGodanVerbs)}
      />
    </Layout>
  )
}

export default Home
