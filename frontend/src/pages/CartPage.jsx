import React from 'react'
import Navbar from '../components/Navbar'
import CartButton from '../components/CartButton'
import CartItems from '../components/CartItems'
import CartItemsPresent from '../components/CartItemsPresent'
import {useSelector } from 'react-redux'
const CartPage = () => {
  const cart=useSelector((state)=>state.cartAddedItems);
  return (
    <div>
      <Navbar/>
      {cart.desserts.length>1?(<CartItemsPresent/>):(<CartItems/>)}
    </div>
  )
}

export default CartPage
