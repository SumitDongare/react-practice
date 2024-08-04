import React, { useState } from 'react'

export default function ContextExample() {
    const [theme, setTheme] = useState('light')

  return (
    <div>
      Parent Component : {theme}
      <ChildComponent theme={theme}></ChildComponent>
    </div>
  )
}


 function ChildComponent(props){
    return <div>
        Child : {props.theme}
        <GrandChildComponent theme = {props.theme}></GrandChildComponent>
    </div>
 }

 function GrandChildComponent(props){
    return <div>
     Grand Child : {props.theme}
</div>

 }