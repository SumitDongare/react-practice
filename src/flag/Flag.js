import React, { useState } from 'react'

export default function Flag() {
    const [isOnline, setIsOnline] = useState(false)

    const on = ()=>{
        setIsOnline(true)

        console.log(isOnline)
    }

    const off = ()=>{
        setIsOnline(false)
        console.log(isOnline)
    }
 


    const getButton = (handler, buttonName)=>{
        return <button onClick={handler}>{buttonName}</button>
    }

  return (
    <div>
        {isOnline ? <h2>I am Online</h2> : <h2>I am Offline</h2>}

     {getButton(on, "On")}
     {getButton(off, "Off")}
     
    </div>
  )
}
