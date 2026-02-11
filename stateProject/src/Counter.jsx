import React from "react";
import { useState } from "react";


function Counter(){
    const [count, setCount] = useState(0)

    const increase = () =>{
        setCount(count + 1);
    }
    const decrease = () =>{
        if (count>0)
            setCount(count-1);
    
    }

    return (
        <>
        <h1>This is a Simple Counter</h1>

            <h2>Current Value : {count}</h2>

        <button onClick={increase}>Click To INC</button>
        <button onClick={decrease}>Click To DEC</button>

        </>
    )


}

export default Counter;