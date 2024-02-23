import { RecoilState, RecoilValueReadOnly, atom, selector } from "recoil";
import { counterState } from "./state";

export const isEvenCount : RecoilValueReadOnly<boolean> = selector({
  key: "evenCount",
  get: ({ get }) => {
    const value = get(counterState);
    return value % 2 === 0;
  }
});