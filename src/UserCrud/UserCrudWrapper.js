import React, { useState } from "react";
import "./UserCrud.css";

import UserForm from "./UserForm";
import UserList from "./UserList";
import { Route, Routes, useNavigate } from "react-router-dom";

export default function UserCrudWrapper() {

  const navigate = useNavigate();
  const [usersList, setUsersList] = useState([
    {
      id: 1,
      firstName: "Rohit ",
      lastName: "Sharma",
      email: "rohit@r.com",
      mobile: "888888888",
    },
    {
      id: 2,
      firstName: "Virat ",
      lastName: "Kohli",
      email: "virat@v.com",
      mobile: "9999999",
    },
  ]);

  const [userToBeUpdated, setUserToBeUpdated] = useState(null);

  const onDelete = (id) => {
    const users = usersList.filter((user) => user.id !== id);
    setUsersList([...users]);
  };

  return (
    <div className="user-crud-wrapper">
      <Routes>
        <Route path="/" element={<div>user crud Wrapper</div>}></Route>
        <Route
          path="/list"
          element={
            <UserList
              usersList={usersList}
              onUserUpdate={(user) => {
                console.log("updating user", user);
                setUserToBeUpdated({ ...user });
                navigate("/users/form")
              }}
              onUserDelete={(id) => {
                const bool = window.confirm("Do you want to Delete?");
                //  console.log("bool", bool )
                if (bool) {
                  onDelete(id);
                }
              }}
            ></UserList>
          }
        ></Route>


        <Route
          path="/form"
          element={
            <UserForm
              userToBeUpdated={userToBeUpdated}
              onUserFormSubmit={(user, id) => {
                console.log("User Created by me", user);
                if (id) {
                  const fUser = usersList.find(
                    (userItem) => userItem.id === id
                  );
                  fUser.firstName = user.firstName;
                  fUser.lastName = user.lastName;
                  fUser.email = user.email;
                  fUser.mobile = user.mobile;
                  setUserToBeUpdated(null);
                } else {
                  user.id = usersList.length + 1;
                  usersList.push(user);
                }

                setUsersList([...usersList]);
                    
                //Navigate
                navigate("/users/list")
              }}
            >
           
            </UserForm>
          }
        ></Route>
      </Routes>

      {/* <UserForm userToBeUpdated={userToBeUpdated} onUserFormSubmit={(user, id )=>{
                    console.log('User Created by me', user)
                    if(id){
                        const fUser = usersList.find(userItem => userItem.id === id);
                        fUser.firstName = user.firstName;
                        fUser.lastName = user.lastName;
                        fUser.email = user.email;
                        fUser.mobile = user.mobile 

                        // usersList.push(fUser)
                        setUserToBeUpdated(null)

                    }else{
                        user.id=usersList.length+1
                        usersList.push(user)
                    }
                  
                  setUsersList([...usersList])

                    }}> </UserForm>
      
        
        <UserList usersList={usersList} onUserUpdate={(user)=>{
            console.log('updating user', user)
            setUserToBeUpdated({...user})

        }} onUserDelete={(id)=>{
         const bool = window.confirm("Do you want to Delete?")
        //  console.log("bool", bool )
           if(bool){
               onDelete(id)
           }
        }}></UserList> */}
    </div>
  );
}
