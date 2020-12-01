import React, {useState} from 'react'



export default function UseStateHook() {
    const [count, setCount] = useState(0)

    function changeCount(amount) {
        setCount(prevCount => prevCount + amount)
    }

    function resetCount() {
        setCount(0)
    }

    return (
        <>
            <div>Use State Hook</div>
            <div>
                <button onClick={() => changeCount(1)}>+</button> 
                <span>{count}</span>
                <button onClick={() => changeCount(-1)}>-</button>
                <button onClick={() => resetCount()}>Reset</button>
            </div>
        </>
    )
}
