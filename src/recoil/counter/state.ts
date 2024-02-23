// Note the import 👇
import { RecoilState, atom, selector } from "recoil";

// creating the state value
export const counterState: RecoilState<number> = atom({
  key: "count",
  default: 0
});

interface ICounterRecoilState {
  state: RecoilState<number>,
  selectors: any
}