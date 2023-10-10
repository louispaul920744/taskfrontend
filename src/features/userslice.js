/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../redux/api";
const userslice=createSlice({
  name:"users",
  initialState:{
    users:[],
    useredit:[]
  },
  reducers:
  {
getuser:(state,action)=>
{
state.users=action.payload
},
edituser:(state,action)=>
{
  state.useredit=action.payload
}
  }
})
// eslint-disable-next-line no-empty-pattern
export const {getuser,edituser}=userslice.actions;
export default userslice.reducer