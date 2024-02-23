// Note the import 👇
import { RecoilState, atom, selector } from "recoil";

// creating the state value
export const counterAtom: RecoilState<number> = atom({
  key: "count",
  default: 0
});