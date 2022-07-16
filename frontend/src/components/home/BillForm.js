import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { postBill, updateBill } from '../../actions/billAction'
import Input from './Input'

const BillForm = () => {
    const initialValues = {billDate:"",paidDate:"",units:"",amount:""}
    const [billDetails,setBillDetails] = useState(initialValues)
    const {id} = useParams()
    const bill = useSelector((state)=>state.bill.bill)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(()=>{
        var date_ = new Date(bill.billDate)
        var day = date_.getDate()
        if(day<10)
            day = ("0" + date_.getDate()).slice(-2);
        var month = date_.getMonth()
        if(month<10)
            month = ("0" + (date_.getMonth() + 1)).slice(-2);
        var billDate = date_.getFullYear()+"-"+(month)+"-"+(day) ;

        date_ = new Date(bill.paidDate)
        day = date_.getDate()
        if(day<10)
            day = ("0" + date_.getDate()).slice(-2);
        month = date_.getMonth()
        if(month<10)
            month = ("0" + (date_.getMonth() + 1)).slice(-2);
        var paidDate = date_.getFullYear()+"-"+(month)+"-"+(day) ;

        setBillDetails({billDate:billDate,paidDate:paidDate,units:bill.units,amount:bill.amount})
    },[bill])
    const handleChange = (e) =>{
        setBillDetails({...billDetails,[e.target.name]:e.target.value})
    }
    useEffect(()=>{
        setBillDetails({...billDetails,["amount"]: 10*billDetails.units})
    },[billDetails.units])

    const Clear = ()=>{
        setBillDetails(initialValues)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(id)
            dispatch(updateBill(id,billDetails,navigate))
        else
            dispatch(postBill(billDetails,navigate))
        Clear()
    }

  return (
    <div className='contaniner mt-4 pt-2 pb-5 shadow-sm'>
        <h4 className='d-flex justify-content-center align-items-center text-primary'>{id?'Edit' :'Create'} Bill</h4>
        <form onSubmit={handleSubmit} autoComplete="off" className='container-sm d-flex flex-column w-50 justify-content-center align-items-center p-3 shadow'>
            <Input type="date" label="Bill Date" name="billDate" value={billDetails.billDate}  handleChange={handleChange}/>
            <Input type="date" label="Paid Date" name="paidDate" value={billDetails.paidDate}  handleChange={handleChange}/>
            <Input type="number" label="No Of Units" name="units" placeholder="Enter units" value={billDetails.units} handleChange={handleChange}/>
            <span className='text-primary pb-1'>Total Amount (1 unit=&#x20B9;10)</span>
            <p className='border border-secondary p-1 ' style={{width:"190px"}} >{billDetails.amount}</p>
            <div>
                <button type='submit' className='btn btn-info'>Submit</button>
                <button className='btn btn-light text-primary m-2' onClick={Clear}>Clear</button>
            </div>
        </form>
    </div>
  )
}

export default BillForm