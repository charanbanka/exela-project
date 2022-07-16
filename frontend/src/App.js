import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'
import BillForm from './components/home/BillForm'
import SingleBill from './components/home/SingleBill'

const App = () => {

  return (
      <BrowserRouter>
        <div className='p-1 container'>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} exact />
          <Route path="/bill" element={<Home/>} exact />
          <Route path="/addBill" element={<BillForm/>} exact />
          <Route path='/bill/:id/edit' element={<BillForm/>} exact />
          <Route path="/bill/:id" element={<SingleBill/>} exact />
        </Routes>
        </div>
      </BrowserRouter>
  )
}

export default App