'use client'

import React, { useState } from "react";
// Note the import below
import { useRecoilState, useRecoilValue } from 'recoil'
import { counterState } from "@/recoil/counter/state";
import { isEvenCount } from "@/recoil/counter/selector";

const Counter = () => {
    const [countState, setCount] = useRecoilState(counterState);
    const value = useRecoilValue(isEvenCount);

    return (
    <div>
        <h1>{countState}</h1>
        <button onClick={() => setCount(c => c + 1)}>Increase count</button>
        <p>{`Is  even count: ${value}`}</p>
    </div>
    );
}

export default Counter