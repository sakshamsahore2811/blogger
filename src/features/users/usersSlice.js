import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id:"0",name:"Saksham"},
    {id:"1",name:"Atharv"}
]

const usersSlice = createSlice({
    name:"users",
    initialState,
    reducers:{
    }
})

export const { createNewUser } = usersSlice.actions;

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;