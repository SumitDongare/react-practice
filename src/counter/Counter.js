import React, { useState } from 'react'

export default function Counter(props) {

    let [count, setCount] = useState(0);

    const Increment = ()=>{

        console.log("current count : ", count)
        const updatedCount = count +1;

        setCount(updatedCount)
        console.log("Updated count : ", updatedCount)
        props.onCountChange(updatedCount)
    }
     
    const Decrement =()=>{
        console.log("current count : ", count)
        const updatedCount = count -1;
        setCount(updatedCount)
        console.log("Updated count : ", updatedCount)
        props.onCountChange(updatedCount)

    }

  return (
    <div>
        <h1>{props.counterName}</h1>
        <div>{count}</div>
        <button onClick={Increment} >Increment</button>
        <button onClick={Decrement} >Decrement</button>
      
    </div>
  )
}
