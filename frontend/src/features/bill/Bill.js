import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bill:{},
    bills:[],
    currentPage:"",
    noOfPages:"",
    loading:true,
}

const billSlice = createSlice({
    name:"bill",
    initialState,
    reducers:{
        getBillReducer: (state,{payload})=>{
            state.bill = payload
        },
        getBillsReducer: (state,{payload})=>{
            state.bills = payload.bills
            state.noOfPages = payload.noOfPages
            state.currentPage = payload.currentPage
            
        },
        postBillReducer: (state,{payload})=>{
            state.bills = [...state.bills,payload]
            state.bill = payload
            
        },
        updateBillReducer: (state,{payload})=>{
            state.bills = state.bills.map((bill)=>bill._id ===payload._id ? payload:bill)
            
        },
        deleteBillReducer: (state,{payload})=>{
            state.bills = state.bills.filter((bill)=>bill._id !== payload._id)
        },
        loadingReducer: (state,{payload})=>{
            state.loading = true
        },
        loadingCompleteReducer: (state,{payload})=>{
            state.loading = false
        }
    }
})

export const {getBillReducer,getBillsReducer,postBillReducer,updateBillReducer,deleteBillReducer,loadingReducer,loadingCompleteReducer} = billSlice.actions;

export default billSlice.reducer