import React from 'react'

export default function UserList({usersList, onUserDelete, onUserUpdate}) {
   
  return (
    <div>
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
