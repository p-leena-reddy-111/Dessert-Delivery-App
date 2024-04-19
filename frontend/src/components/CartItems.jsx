import React from 'react'
import {useNavigate} from 'react-router-dom'
import { useSelector} from 'react-redux';
import { IoCartOutline } from "react-icons/io5";

const CartItems = () => {
  //const cartitems=useSelector((state)=> state.cartAddedItems);
  const navigate=useNavigate();
  const handleBakeryClick=async()=>
  {
    navigate("/home");
  }
  return (
    <div>
        <div className='flex items-center justify-center'>
        <IoCartOutline size={300} className='flex items-center justify-center'/>
        </div>
        <div className='flex items-center justify-center md:px-[200px] lg:px-[280px]'>
        <p className='sm:text-2xl md:text-5xl ld:text-7xl font-extrabold justify text-center'>Sweet endings are always baking.</p>
        </div>
        <div className='flex items-center justify-center md:px-[200px] lg:px-[350px] py-[50px]'>
        <p className='font-bold justify text-center'>Your cart is feeling a little lonely. Let's fill it up with some yummy desserts!</p>
        </div>
        <div className='flex items-center justify-center'>
            <button onClick={handleBakeryClick} className='flex items-center justify-center bg-black text-white py-2'>Browse Bakeries</button>
        </div>
    </div>
  )
}

export default CartItems
