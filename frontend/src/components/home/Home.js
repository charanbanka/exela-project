import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBill, getBills } from '../../actions/billAction'
import Spinner from 'react-bootstrap/Spinner';
import { useLocation, useNavigate } from 'react-router-dom'
import './Style.css'
import ReactPaginate from 'react-paginate';

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
const Home = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const query = useQuery();
    const {loading, bills,noOfPages} = useSelector((state)=>state.bill)
    const page = query.get('page') || 1;
    useEffect(()=>{
        dispatch(getBills(page))
    },[dispatch,page])

    const handlePageClick = (e) =>{
        navigate(`/bill?page=${e.selected+1}`)
    }
    const SingleBillPage = (e,id)=>{
        dispatch(getBill(id));
        navigate(`/bill/${id}`)
    }
    if(loading) return  <Spinner animation="border" variant="primary" />
  return (
    <div className='container-fluid m-1'>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Bill Date</th>
                    <th scope="col">Paid Date</th>
                    <th scope="col">No of units</th>
                    <th scope='col'>Total Amount</th>
                </tr>
            </thead>
            <tbody>
                {bills && bills.map((bill)=>(
                    <tr key={bill._id} style={{cursor:"pointer"}} onClick={(e)=>SingleBillPage(e,bill._id)}>
                        <td>{bill.billDate.substring(0, 10)}</td>
                        <td>{bill.paidDate.substring(0, 10)}</td>
                        <td>{bill.units}</td>
                        <td>&#x20B9;{bill.amount}</td>
                    </tr>
                ))}
            </tbody>
        </table>
         <ReactPaginate
            breakLabel="..."
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            pageCount={noOfPages}
            nextLabel={"next"}
            previousLabel={"previous"}
            containerClassName='pagination justify-content-center'
            pageClassName='page-item'
            pageLinkClassName='page-link'
            previousClassName='page-item'
            previousLinkClassName='page-link'
            nextClassName='page-item'
            nextLinkClassName='page-link'
            activeClassName='active'
        /> 
    </div>
  )
}

export default Home