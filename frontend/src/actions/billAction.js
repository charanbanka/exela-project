import * as api from '../api/index'
import { deleteBillReducer, getBillReducer, getBillsReducer, loadingCompleteReducer, loadingReducer, postBillReducer, updateBillReducer } from '../features/bill/Bill'

export const getBill = (id) => async(dispatch)=>{
    try {
        dispatch(loadingReducer())
        const {data} = await api.getBill(id)

        dispatch(getBillReducer(data))
        dispatch(loadingCompleteReducer())
    } catch (error) {
        console.log(error)
    }
}

export const getBills = (page) => async(dispatch)=>{
    try {
        dispatch(loadingReducer())
        const {data} = await api.getBills(page)
        dispatch(getBillsReducer(data))
        dispatch(loadingCompleteReducer())
    } catch (error) {
        console.log(error)
    }
}

export const postBill = (billDetails,navigate) => async(dispatch)=>{
    try {
        dispatch(loadingReducer())
        const {data} = await api.postBill(billDetails)

        dispatch(postBillReducer(data))
    
         navigate(`/bill/${data._id}`)
         dispatch(loadingCompleteReducer())
    } catch (error) {
        console.log(error)
    }
}

export const updateBill = (id,updateBillDetails,navigate) => async(dispatch)=>{
    try {
        dispatch(loadingReducer())
        const {data} = await api.updateBill(id,updateBillDetails)

        dispatch(updateBillReducer(data))

        navigate(`/bill/${data._id}`)
        dispatch(loadingCompleteReducer())
    } catch (error) {
        console.log(error)
    }
}

export const deleteBill = (id) => async(dispatch)=>{
    try {
        dispatch(loadingReducer())
        const {data} = await api.deleteBill(id)

        dispatch(deleteBillReducer(data))
        dispatch(loadingCompleteReducer())
    } catch (error) {
        console.log(error)
    }
}