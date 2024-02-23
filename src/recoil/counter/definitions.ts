import { RecoilState, RecoilValueReadOnly } from "recoil"

export interface IRecoilCounterStateSelectors {
  isEven: RecoilValueReadOnly<boolean>
}

export interface IRecoilCounterState {
  atom: RecoilState<number>,
  selectors: IRecoilCounterStateSelectors
}