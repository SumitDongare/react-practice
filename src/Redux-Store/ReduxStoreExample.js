import React from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { store } from './store'
import { decrement, decrementByAmount, increment, incrementByAmount } from './counterSlice'
import { addUser, deleteUser } from './usersSlice'

export default function ReduxStoreExample() {


  return ( <Provider store={store}>
    <div>
      Redux store example
    </div>

    <ReduxCounterExample></ReduxCounterExample>
    <br></br>
    <hr></hr>
    <br></br>
    <ReduxUsersExample></ReduxUsersExample>

  </Provider>
  )
}


function ReduxCounterExample(){
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()

  return <div>
    <br></br>
    <br></br>
     count = {count}
     <br></br>
     <br></br>
     <button onClick={()=>{
      dispatch(increment())
     }}>Increment</button>

     <button onClick={()=>{
      dispatch(decrement())
     }}>Drecrement</button>

<button onClick={()=>{
      dispatch(incrementByAmount(5))
     }}>Increment by 5</button>

<button onClick={()=>{
      dispatch(decrementByAmount(10))
     }}>decrement by 10</button>

  </div>
}

function ReduxUsersExample(){
  const users = useSelector((state) => state.users)
  const dispatch = useDispatch()

  const handleDelete = (userId)=>{
    dispatch(deleteUser(userId))
  }

  return <div>
    Total Users : {users.length}
    {
      users.map((user)=>{
        return <div key={user.id}>{user.name} <button onClick={() => handleDelete(user.id)}>Delete</button> </div>
      })
    }

    <button onClick={()=>{
        dispatch(addUser({
          id: users.length+1,
          name : "Pranay" + users.length 
        })) 
    }}>Add User</button> 


  </div>
}
