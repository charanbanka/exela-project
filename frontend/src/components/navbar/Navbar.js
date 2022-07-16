import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/ExelaTech_logo.png'


const Navbar = () => {
  return (
    <div className='container shadow-sm d-flex justify-content-around align-items-center p-1'>
        <a href="/" className='text-decoration-none'>
          <img src={logo} alt="logo" width="80px" height="40px"></img>
        </a>
        <Link to="/addBill"><button className='btn btn-primary'>AddBill</button></Link> 
    </div>
  )
}

export default Navbar