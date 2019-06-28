import React, { useState } from "react";

export function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>
                没事走两步
            </button>
        </div>
    )
}