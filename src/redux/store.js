import { configureStore } from "@reduxjs/toolkit";

import userReducer from '../features/userslice'
import pageReducer from '../features/pageslice'
export default configureStore({
    reducer: {
     
      user:userReducer,
      page:pageReducer
      
    },
  });