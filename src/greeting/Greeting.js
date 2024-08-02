import React from 'react'

export default function Greeting({greet, name}) {

 const age = 30;
 
  return (
    <div>
      <h1>Greeting Component</h1>
      <p>{greet}{name} </p>
      <p>My age is {age}</p>
    </div>
  )
}
