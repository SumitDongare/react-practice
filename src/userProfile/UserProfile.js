import React, { useState } from 'react'
import "./UserProfile.css"

export default function UserProfile(user) {

  //  const [user, setUser] = useState({
  //       id : 1,
  //       firstName : "Sumit",
  //       lastName : "Dongare",
  //       age : 50,
  //       gender: "Male",
  //       isAdmin : false
  //   })

    // const user = {
    //     id : 1,
    //     firstName : "Sumit",
    //     lastName : "Dongare",
    //     age : 30,
    //     gender: "Male",
    //     isAdmin : false
    // }

    const [isLoading, setIsLoading]=useState(false)
  return (
      !isLoading && <div className='user-profile-container'>
      <p>Name:{user.firstName} {user.lastName} </p>
      <p className='red-color'>Age : {user.age}</p>
      {/* <p style ={{color: user.isAdmin?"green":"red"}} >Gender: {user.gender}</p> */}  
      <p className={user.isAdmin?"admin-class": "non-admin-class"}> 
        <React.Fragment>Gender:{user.gender}</React.Fragment> 
        </p>

        {user.isAdmin? <p>I am an Admin</p> : <p>I am not an Admin</p>}

        <button onClick={user.onDelete} >Delete</button>
       
    </div>
  )
}
