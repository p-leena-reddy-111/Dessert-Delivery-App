import React from 'react'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../redux/index';
import { useSelector } from 'react-redux';

const CartButton = () => {
  const cart=useSelector((state)=> state.cartAddedItems);
  console.log(cart);

  return (
    <div>
      <div className='text-center'>
        <h2 className='text-center'>Cart</h2>
        <button  className="mx-2">-</button>cart
        <button className='mx-2'>+</button>
      </div>
    </div>
  )
}

export default CartButton
