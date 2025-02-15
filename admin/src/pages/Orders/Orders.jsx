import React from 'react'
import './Orders.css'
import { useState } from 'react'

const Orders = ({url}) => {

  const [orders,setOrders]=useState([]);

  const fetchAllOrders=async()=>{
    const response=await axios.get()
  }

  return (
    <div>
      
    </div>
  )
}

export default Orders
