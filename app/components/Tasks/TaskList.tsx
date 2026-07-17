"use client";

import { useState } from "react";

export default function TaskList() {
    const [count, setCount] = useState(0);
    return (
        <>
            <h1>{count}</h1>
            <button className="cursor-pointer"
            onClick={() => setCount(count + 1)}
            >
                Increase
            </button>
        </>
    );
}