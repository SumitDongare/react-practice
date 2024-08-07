import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function UserList({usersList, onUserDelete, onUserUpdate}) {
  const navigate = useNavigate();
   
  return (
    <div>
      <button onClick={()=>{
        navigate('/users/form')
      }}>Add New</button>
      <br></br>
      <br></br>
       <table>
        <thead>
            <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {usersList.map((user) => {
            return (
              <tr key={user.id}>
                <td>
                  {user.firstName}
                  {user.lastName}
                </td>
                <td>{user.email}</td>
                <td>{user.mobile}</td>
                <td>
                    <button onClick={()=>{
                        onUserUpdate(user)
                    }}>Update</button>
                    
                    <button onClick={()=>{
                        onUserDelete(user.id)
                    }}>Delete</button>
                </td> 
              </tr>
            );
          })}

        </tbody>
      </table>
    </div>
  )
}
