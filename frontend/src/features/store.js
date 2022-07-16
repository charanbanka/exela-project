import { configureStore } from "@reduxjs/toolkit";
import billSlice from './bill/Bill.js'

export const store = configureStore({
    reducer:{
        bill: billSlice,
    }
})