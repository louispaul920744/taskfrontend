/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const pageslice=createSlice({
  name:"pages",
  initialState:{
    pages:[],
    pageedit:[]
  },
  reducers:
  {
getpages:(state,action)=>
{
state.pages=action.payload
},
editpage:(state,action)=>
{
  state.pageedit=action.payload
}
  }
})
// eslint-disable-next-line no-empty-pattern
export const {getpages,editpage}=pageslice.actions;
export default pageslice.reducer