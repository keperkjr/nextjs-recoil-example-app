'use client'

import React, { useState } from "react";
// Note the import below
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import recoilCounterState from "@/recoil/counter/state";

const Counter = () => {
    const [counterState, setCounter] = useRecoilState(recoilCounterState.atom);
    const isEven = useRecoilValue(recoilCounterState.selectors.isEven);
    const counterStateFromSelector = useRecoilValue(recoilCounterState.selectors.setCount);
    const setCount = useSetRecoilState(recoilCounterState.selectors.setCount);

    function isEvenFunc() {
        return String(counterState % 2 == 0);
    }

    return (
        <div>
            <h1>{counterState} from {`'useRecoilState'`}</h1>
            <h1>{counterStateFromSelector} from {`'useRecoilValue'`}</h1>
            <div style={{margin: "10px"}}>
                <button onClick={() => setCounter(c => c + 1)}>Increase count using {`'useRecoilState'`}</button>
            </div>
            <div>
                <button onClick={() => setCount(counterState + 1)}>Increase count using {`'useSetRecoilState'`}</button>
            </div>
            <p>Is even count from {`'useRecoilValue'`}: {String(isEven)}</p>
            <p>Is even from {`'isEvenFunc'`} function: {isEvenFunc()}</p>
        </div>
    );
}

export default Counter