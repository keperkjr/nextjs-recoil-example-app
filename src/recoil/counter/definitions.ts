import { RecoilState, RecoilValueReadOnly } from "recoil"

export interface IRecoilCounterStateSelectors {
  isEven: RecoilValueReadOnly<boolean>,
  setCount: RecoilState<number>
}

export interface IRecoilCounterState {
  atom: RecoilState<number>,
  selectors: IRecoilCounterStateSelectors
}