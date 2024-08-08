import { createSlice } from "@reduxjs/toolkit"


const initialState = [
    {
        id: 1,
        name : "Sumit"
    }
]

export const usersSlice= createSlice({
    name : 'users',
    initialState,
    reducers : {
        addUser : (state, action) =>{
            state.push(action.payload)
        },

        deleteUser : (state, action) =>{
           return state.filter(user =>user.id !== action.payload )  
        }
    }

})

export const {addUser, deleteUser } = usersSlice.actions

export default usersSlice.reducer;