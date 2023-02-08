import React, { useState } from 'react';

const Count = () => {
    const [count , Setcount] = useState(0) ;

    const increment = () =>{
        Setcount(count + 1);
    }

    const decrement = () =>{
        Setcount(count - 1);
    }


    return(
        <>
        <h1>{count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        </>
    )
}

export default Count