import { toHaveErrorMessage } from '@testing-library/jest-dom/dist/matchers';
import React, { useContext, useState } from 'react'

const MyContext = React.createContext();

export default function ContextExample() {
    const [theme, setTheme] = useState('light')



  return (
    <div>
      Parent Component : {theme}
      <MyContext.Provider value={theme}>
      <ChildComponent></ChildComponent>
      </MyContext.Provider>

      <button onClick={()=>{
        setTheme(theme === 'light'?'dark':'light')
      }}>Change Theme</button>

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
    const theme = useContext(MyContext)
    return <div>
     Grand Child : {theme}
</div>

 }