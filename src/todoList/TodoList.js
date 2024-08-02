import React, { useState } from 'react'

export default function TodoList() {
    const [todos, setTodos] =useState([])  

    const [input, setInput] = useState("")

    const changeHandler = (e)=>{
        setInput(e.target.value)
       console.log(input)
    }

    const handler = ()=>{
        if(input.length >=1){
            setTodos([...todos, {taskId : todos.length +1, name : input}])
        }

        setInput("")
    }
    

  return (
    <div>
        <h2>Todo List</h2>
        <input type='text' placeholder='Enter Task' value={input} onChange={changeHandler}></input>
        <button onClick={handler}>Add</button>
       
      
       {
        todos.map((todo)=>{
            return <p key={todo.taskId}> {todo.name}</p>
        })
       }
      
    </div>
  )
}
