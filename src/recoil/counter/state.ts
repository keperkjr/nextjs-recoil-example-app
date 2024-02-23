import { counterAtom } from "./atom"
import { IRecoilCounterState } from "./definitions"
import selectors from "@/recoil/counter/selectors";

const recoilCounterState = {
    atom: counterAtom,
    selectors
} as IRecoilCounterState
  
export default recoilCounterState