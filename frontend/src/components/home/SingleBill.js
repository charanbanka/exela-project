import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {MdEdit,MdDelete} from 'react-icons/md'
import { deleteBill, getBill } from '../../actions/billAction'
import Spinner from 'react-bootstrap/Spinner';
import './Style.css'

const SingleBill = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {bill,loading} = useSelector((state)=>state.bill)
    const [overlay,setOverlay] = useState(false)
    const handleDelete = (e)=>{
        dispatch(deleteBill(bill._id))
        setOverlay(false)
        navigate('/')
    }
    const handleEdit =(e,id)=>{
        dispatch(getBill(id))
        navigate(`/bill/${id}/edit`)
    }
    if(loading) return  <Spinner animation="border" variant="primary" />
  return (
    <div>
    {bill && (
        <div className='container m-2 p-5 d-flex flex-column shadow-sm justify-content-center align-items-center'>
            <div className='d-flex'><h5>Bill Date: </h5><h4 className='text-primary pl-2'>{bill.billDate.substring(0,10)}</h4></div>
            <div className='d-flex'><h5>Paid Date: </h5><h4 className='text-primary pl-2'>{bill.paidDate.substring(0,10)}</h4></div>
            <div className='d-flex'><h5>No of Units: </h5><h4 className='text-primary pl-2'>{bill.units}</h4></div>
            <div className='d-flex'><h5>Amount: </h5><h4 className='text-primary pl-2'>&#x20B9;{bill.amount}</h4></div>
            <div className='d-flex'><h5>Bill Generate Date: </h5><h4 className='text-primary pl-2'>{bill.createdAt.substring(0,10)}</h4></div>
            <div className=''>
                <button className='btn btn-warning m-2' onClick={(e)=>handleEdit(e,bill._id)}>Edit<MdEdit/></button>
                <button className='btn btn-danger m-2' onClick={(e)=>{setOverlay(true);}}>Delete<MdDelete/></button>
            </div>
            {overlay && (
                <div className='d-flex flex-column align-items-center justify-content-center overlay-1'>
                <div style={{width:"250px"}} className="bg-white rounded p-3 d-flex flex-column justify-content-center align-items-center">
                    <p>{`Are you sure you want to remove one month bill`}</p>
                    <button onClick={handleDelete} className='btn btn-primary w-75' >Confirm</button>
                    <p onClick={()=>setOverlay(false)} className='text-primary' style={{paddingTop:"1rem"}}>Cancel</p>
                </div>
                </div>
            )} 
        </div>)
    }
        </div>

  )
}

export default SingleBill