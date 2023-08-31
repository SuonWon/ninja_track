import React from 'react'
import { Route, Routes } from 'react-router';
import AddCashIn from '../components/CashInOutRecord/CashIn/AddCashIn'
import Home from '../components/Home/Home';

const route = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/cashIn/add' element={<AddCashIn />}></Route>
      </Routes>
    </>
  )
}

export default route