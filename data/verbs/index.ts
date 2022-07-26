import { Verb } from "../../types"

// godan
import { arau } from "./godan/arau"
import { asobu } from "./godan/asobu"
import { hairu } from "./godan/hairu"
import { haku } from "./godan/haku"
import { iru } from "./godan/iru"
import { isogu } from "./godan/isogu"
import { iu } from "./godan/iu"
import { kaburu } from "./godan/kaburu"
import { kaeru } from "./godan/kaeru"
import { kaesu } from "./godan/kaesu"
import { kau } from "./godan/kau"
import { kesu } from "./godan/kesu"
import { kiru as kiruGodan } from "./godan/kiru"
import { matsu } from "./godan/matsu"
import { naku } from "./godan/naku"
import { naru } from "./godan/naru"
import { nomu } from "./godan/nomu"
import { noru } from "./godan/noru"
import { owaru } from "./godan/owaru"
import { oyogu } from "./godan/oyogu"
import { suu } from "./godan/suu"
import { suwaru } from "./godan/suwaru"
import { tatsu } from "./godan/tatsu"
import { tetsudau } from "./godan/tetsudau"
import { toru } from "./godan/toru"
import { tsukau } from "./godan/tsukau"
import { wataru } from "./godan/wataru"
import { yaru } from "./godan/yaru"

// ichidan
import { akeru } from "./ichidan/akeru"
import { dekakeru } from "./ichidan/dekakeru"
import { kakeru } from "./ichidan/kakeru"
import { kiru as kiruIchidan } from "./ichidan/kiru"
import { niru } from "./ichidan/niru"
import { oboeru } from "./ichidan/oboeru"
import { okureru } from "./ichidan/okureru"
import { oriru } from "./ichidan/oriru"
import { shawaaoabiru } from "./ichidan/shawaaoabiru"
import { shimeru } from "./ichidan/shimeru"
import { shiraberu } from "./ichidan/shiraberu"
import { taberu } from "./ichidan/taberu"
import { tariru } from "./ichidan/tariru"
import { tsukeru } from "./ichidan/tsukeru"
import { wasureru } from "./ichidan/wasureru"
import { yaseru } from "./ichidan/yaseru"

export const verbs: Verb[] = [
  // godan
  arau,
  asobu,
  hairu,
  haku,
  iru,
  isogu,
  iu,
  kaburu,
  kaeru,
  kaesu,
  kau,
  kesu,
  kiruGodan,
  matsu,
  naku,
  naru,
  nomu,
  noru,
  owaru,
  oyogu,
  suu,
  suwaru,
  tatsu,
  tetsudau,
  toru,
  tsukau,
  wataru,
  yaru,
  // ichidan
  akeru,
  dekakeru,
  kakeru,
  kiruIchidan,
  niru,
  oboeru,
  okureru,
  oriru,
  shawaaoabiru,
  shimeru,
  shiraberu,
  taberu,
  tariru,
  tsukeru,
  wasureru,
  yaseru,
]

export const godanVerbs: Verb[] = verbs.filter((verb) => verb.type === "godan")
export const ichidanVerbs: Verb[] = verbs.filter(
  (verb) => verb.type === "ichidan"
)

export const uGodanVerbs: Verb[] = verbs.filter((verb) => verb.ending === "う")
export const tsuGodanVerbs: Verb[] = verbs.filter(
  (verb) => verb.ending === "つ"
)
export const ruGodanVerbs: Verb[] = verbs.filter((verb) => verb.ending === "る")
export const muGodanVerbs: Verb[] = verbs.filter((verb) => verb.ending === "む")
export const buGodanVerbs: Verb[] = verbs.filter((verb) => verb.ending === "ぶ")
export const nuGodanVerbs: Verb[] = verbs.filter((verb) => verb.ending === "ぬ")
export const kuGodanVerbs: Verb[] = verbs.filter((verb) => verb.ending === "く")
export const guGodanVerbs: Verb[] = verbs.filter((verb) => verb.ending === "ぐ")
export const suGodanVerbs: Verb[] = verbs.filter((verb) => verb.ending === "す")
