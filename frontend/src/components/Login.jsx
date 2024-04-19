import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../redux/index';
import Cookies from "universal-cookie";
import { useNavigate } from 'react-router-dom';
import image from "../images/frontpageimage.avif";
const cookies=new Cookies();


const Login = () => {
  const [email,setEmail]=useState("");
  const [password, setPassword] = useState("");
  const [rememberMe,setRememberMe]=useState(false);
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const handleCheckBoxChange=()=>
  {
    setRememberMe(!rememberMe);
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const configuration={
      method:"post",
      url:"http://localhost:8800/user/login",
      data:{
        email,
        password
      },
    };
    
    await axios(configuration)
      .then((result) => 
      {
          cookies.set("TOKEN", result.data.token, {path: "/",});
          //console.log("result",result.data.user.username);
          dispatch(actionCreators.loginSuccess(result.data.user.username));
          navigate('/home');
      })
      .catch((error) => {
        //console.log("error",error);
        dispatch(actionCreators.loginFailure(error));
      });

  }

  return (
    <div>
      <div className='flex items-center justify-between gap-6'>  
        <div className="hidden md:flex max-w-[1000px]">
          <img className="object-cover h-screen" src={image} alt="/"></img> 
        </div>
        <div className="bg-white shadow-md rounded-lg px-8 py-10 mx-auto lg:mx-auto w-full md:max-w-md border-4 mt-20 max-w-sm md:mr-5">
          <h2 className="text-2xl font-bold text-black mb-6">Login</h2>
          <form onSubmit={(e) => handleSubmit(e)} >
            <div className="mb-6">
              <label className="block text-sm font-medium text-black mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow-sm bg-gray-50 border border-gray-300 rounded-lg w-full py-2 px-3 text-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-black mb-2">
                Password *
              </label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="shadow-sm bg-gray-50 border border-gray-300 rounded-lg w-full py-2 px-3 text-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                required
                />
            </div>
            <div className="flex justify-between items-center mb-6">
              <label className='flex justify-center items-center gap-2'>
                <input className='flex justify-center items-center' type="checkbox" checked={rememberMe} onChange={handleCheckBoxChange} />
                Remember me
              </label>
              <a href="" className="text-sm hover:underline hover:text-yellow-500 hover:font-bold">
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full flex justify-center items-center py-2 px-4 text-sm font-medium text-white bg-yellow-500 rounded-lg hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
              onClick={(e)=>handleSubmit(e)}
              >
              Login
            </button>
            <div className='mt-4'>
              <a href="/register" className="text-sm text-yellow-500">
                <p>Don't have an account?<span className='hover:underline font-bold'> Register</span></p>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
