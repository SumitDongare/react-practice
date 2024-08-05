import React, { useEffect, useState } from 'react'

export default function UseEffectExample({name}) {
    const [counter, setCounter] = useState(0)
    const [counter2, setCounter2] = useState(0)

    //Syntax
    //useEffect(()=>{},[])

    //Example1 : Without dependency array : This effect is executed on every component render.
    //  useEffect(()=>{
    //     console.log(" 1. This is executed on every render");
    //  })

     //Example2 : With empty dependency array : 
     useEffect(()=>{
            console.log("2. This is executed only once when counter is renderd." )
     },[])

     //Example3 : With dependency array :
     useEffect(()=>{
           alert("I am changed")  

            //  console.log("3. This is executed when counter is updated", counter)

            //  return ()=>{
            //   console.log("I am cleaning up", counter)
            //  }
     }, [counter])


     //Example4 : with multiple dependency array :
     useEffect(()=>{
        console.log("4. This is executed when counter or counter2 is updated")
        return ()=>{
          console.log("I am cleaning up", counter)
         }
     },[counter, counter2])

     //Example5 : with dependency array, prop
     useEffect(()=>{
         console.log("5. This is executed when name prop is changed")
     }, [name])
  return (
    <div>

        <h1>Use Effect Example : {name}</h1>
        {counter}
        <button onClick={()=>setCounter(counter+1)}>Increment</button>
        <br></br>
        {counter2}
         <button onClick={()=>setCounter2(counter2+1)}>Increment2</button>
      
    </div>
  )
}
