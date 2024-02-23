import { RecoilState, RecoilValueReadOnly, atom, selector } from "recoil";
import { counterAtom } from "./atom";
import { IRecoilCounterStateSelectors } from "./definitions";

export const isEven : RecoilValueReadOnly<boolean> = selector({
  key: "evenCount",
  get: ({ get }) => {
    const value = get(counterAtom);
    return value % 2 === 0;
  }
});

const setCount : RecoilState<number> = selector({
  key: 'setCount',
  get: ({ get }) => get(counterAtom),
  set: ({ set, get }, newValue) => {
      set(counterAtom, newValue);
  },
});

const selectors = {
  isEven,
  setCount
} as IRecoilCounterStateSelectors

export default selectors;