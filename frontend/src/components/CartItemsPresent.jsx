import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { actionCreators } from '../redux/index';
import { useSelector } from 'react-redux';
const CartItemsPresent = () => {
  const cart=useSelector((state)=>state.cartAddedItems);
  const [isclicked,setIsClicked]=useState(false);
  const placeorder=()=>{
    setIsClicked(true);
    //alert("Your order has been placed");
  }
  const dispatch=useDispatch();
  return (
    <div>
      <p className='flex items-center justify-center font-extrabold'>Your Cart</p>
      <div className='flex flex-col my-[20px] sm:mx-[5px] md:mx-[150px] lg:mx-[250px] border-8 rounded-3xl'>
        <div className='flex flex-col'>
            {cart.desserts.map((menuItem,index)=>(
                 index !== 0 ? (
                    <div>
                        <div>
                            <div key={index} className='text-sm sm:text-base md:text-base flex flex-row justify-between mx-10 my-5 pb-4 border-b-4'>
                                <div className='flex flex-row justify-between items-center gap-3'>
                                    <img className='w-20 h-20' src={menuItem.image} alt="/"/>
                                    <div className='flex flex-col items-start justify-center'>
                                        <p>{menuItem.name}</p>
                                        <button className=" my-2 flex bg-white text-yellow-500  font-bold px-2 py-2 me-1 rounded-1xl  hover:bg-yellow-500 hover:text-white hover:border-yellow-500">
                                            <div className='flex gap-6'>
                                                <p onClick={()=>dispatch(actionCreators.removeFromCart(menuItem))} className='font-extrabold px-2'>-</p>
                                                <span className='font-extrabold'>{cart.desserts.find((item) => item._id === menuItem._id).quantity}
                                                </span>
                                                <p onClick={()=>dispatch(actionCreators.addToCart(menuItem))} className='font-extrabold px-2'>+</p>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                                <div className='flex items-center justify-between gap-2'>   
                                    <div className='flex'>
                                        <p >₹ {menuItem.price*menuItem.quantity}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  ) : (
                    <> </>)
            ))}
        </div>
        <div className='flex justify-between text-black mx-10 my-5'>
            <p className='font-extrabold'>Total Price:</p>
            <p className='font-extrabold'>₹{cart.amount}</p>
        </div>
      </div>
      <div className='flex items-center justify-center font-extrabold'>
        {isclicked===false ? (<button onClick={placeorder} className='text-yellow-500 font-extrabold hover:bg-yellow-500 hover:text-white'>Place Order</button>):(<p>Order Placed!</p>)}
      </div>

    </div>
  )
}

export default CartItemsPresent
