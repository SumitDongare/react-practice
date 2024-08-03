import React, { useState } from 'react'
import UserProfile from './UserProfile'
import "./UserList.css"



export default function UserList() {

  const [users, setUsers] = useState([ {
    id:1,
firstName:"Rohit",
lastName: "Sharma",
age:30,
gender:"Male",
isAdmin : true
},
{
    id:2,
firstName:"Hardik",
lastName: "Pandya",
age:35,
gender:"Male",
isAdmin : false
}])

const [formValues, setFormValues] = useState({
  firstName :'',
  lastName :'',
  age :''

})

  const onInputChange = (e)=>{
    console.log(e.target.value, e.target.name )
    formValues[e.target.name]=e.target.value;
    setFormValues({...formValues})
  
  }

  const addUser = ()=>{
    users.push({
      "id":users.length+1,
      "firstName":formValues.firstName,
      "lastName":formValues.lastName,
      "age":formValues.age
    })

    setUsers([...users]);

    setFormValues({
      firstName:'',
      lastName:'',
      age:''
    })

  }

  const onDelete = (id)=>{
    const filteredUsers = users.filter(user => user.id !== id);
    setUsers([...filteredUsers])
  }

  return (
    <div>
     <input name='firstName' placeholder='First Name' value={formValues.firstName}  onChange={onInputChange}></input>
     <input name='lastName' placeholder='Last Name' value={formValues.lastName} onChange={onInputChange}></input>
     <input name='age' placeholder='Age' value={formValues.age} onChange={onInputChange}></input>
     <br></br>
     <button className='myButton' onClick={addUser}>Add User</button>

     <div className='user-list-container'>
      {users.map(user =>{
        return <div key={user.id} style={{backgroundColor:'blue', color:'white', width:'200px'}} >
           <UserProfile onDelete={()=>{
            onDelete(user.id)
           }}firstName = {user.firstName} lastName={user.lastName} age={user.age} gender={user.gender} isAdmin={user.isAdmin} ></UserProfile>
{/*            
            <button onClick={()=>{
                onDelete(user.id)
            }}>Delete</button> */}
           </div>
      })}
     </div>
    

    </div>
  )
}
