import React from 'react'
import {AiOutlineMenu,AiOutlineSearch,AiOutlineClose,AiFillTag} from 'react-icons/ai'
import {BsFillCartFill} from 'react-icons/bs'
import {TbTruckDelivery} from 'react-icons/tb'
import {FaUserFriends,FaWallet} from 'react-icons/fa'
import {MdFavorite} from 'react-icons/md'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import { useSelector} from 'react-redux';
import { RiLogoutBoxFill } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { actionCreators } from '../redux/index';

const Navbar = () => {
  const cart=useSelector((state)=> state.cartAddedItems);
  const username=useSelector((state)=>state.userLoggedIn);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [nav,setNav]=useState(false);

  const handleLogout = () => {
    dispatch(actionCreators.loginOut());
    navigate("/login");
  }
  const enterSignIn=()=>{
    navigate("/");
  }
  const navigateCart=()=>
  {
    navigate("/cart");
  }
  const navigateOrders=()=>{
    navigate("/cart");
  }
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
        {/*Left side*/}
      <div className='flex items-center'>
        <div onClick={()=>setNav(!nav)}className='cursor-pointer'>
            <AiOutlineMenu size={30}/>
        </div>
        <h1 className='text-2xl sm:text-1xl lg:text-4xl px-2 font-bold'>Dessert<span className='font-normal'> Delights</span></h1>
      
      </div>
      {/*Search Input */}
      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px] justify-between'>
        <AiOutlineSearch size={20}/>
        <input className='bg-transparent p-2 w-full focus:outline-none' type="text" placeholder='Search Desserts'/>
      </div>
      {/*Sign In*/}
      {
        username.username ? (<div className='flex flex-row items-center justify-center hover:scale-105 duration-100 hover:text-yellow-500 cursor-pointer ml-3 px-3'>
          <FaUser className='hidden md:flex mr-1'/>
          <p className='hidden lg:flex'>{username.username}</p>
        </div>):
         (<div className='flex flex-row items-center justify-center hover:scale-105 duration-100 hover:text-yellow-500 cursor-pointer'>
        <FaUser className='hidden md:flex mr-1'/>
        <p className='hidden lg:flex' onClick={()=>enterSignIn()}>Sign In</p>
      </div>)
      }
      {/*Cart button*/}
      <div className=' rounded-full text-black md:flex items-center px-3 py-2 relative hover:scale-105 duration-100 hover:text-yellow-500 cursor-pointer'>
        <BsFillCartFill size={30}  className='mr-2 ' onClick={navigateCart}/>
        <div className='absolute -top-2 left-5 bg-black text-white rounded-full px-1 text-xs font-bold'>{cart.desserts.length-1}</div>
      </div>
      {/*<button className='bg-black rounded-full text-white hidden md:flex items-center py-2'>
        <BsFillCartFill size={20} className='mr-2'/>
        Cart
  </button>*/}

      {/*Mobile Menu*/}
      {/*Overlay*/}

    
      {nav? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div>:' '}
      {/*Side drawer menu*/}
      <div className={nav? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300': 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
        <AiOutlineClose size={30} 
           onClick={(e)=>{setNav(!nav)}}
           className='absolute right-4 top-4 cursor-pointer'
        />
        <h2 className='text-2xl p-4'>
            Best <span className='font-bold'>Eats</span>
        </h2>
        <nav>
            <ul className='flex flex-col p-4 text-gray-800'>  
                <li onClick={(navigateOrders)} className='text-xl py-4 flex cursor-pointer'><TbTruckDelivery size={25} className='mr-4'/>Orders</li>
                <li className='text-xl py-4 flex cursor-pointer'><MdFavorite size={25} className='mr-4'/>Favorites</li>
                <li className='text-xl py-4 flex cursor-pointer'><FaWallet size={25} className='mr-4'/>Wallet</li>
                <li className='text-xl py-4 flex cursor-pointer'><AiFillTag size={25} className='mr-4'/>Promotions</li>
                <li className='text-xl py-4 flex cursor-pointer'><FaUserFriends size={25} className='mr-4'/>Invite Friends</li>
                <li onClick={handleLogout}className='text-xl py-4 flex cursor-pointer'><RiLogoutBoxFill size={25} className='mr-4'/>Logout</li>
            </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
