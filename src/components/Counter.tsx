'use client'

import React, { useState } from "react";
// Note the import below
import { useRecoilState, useRecoilValue } from 'recoil'
import recoilCounterState from "@/recoil/counter/state";

const Counter = () => {
    const [counterState, setCounter] = useRecoilState(recoilCounterState.atom);
    const isEven = useRecoilValue(recoilCounterState.selectors.isEven);

    return (
    <div>
        <h1>{counterState}</h1>
        <button onClick={() => setCounter(c => c + 1)}>Increase count</button>
        <p>{`Is  even count: ${isEven}`}</p>
    </div>
    );
}

export default Counter