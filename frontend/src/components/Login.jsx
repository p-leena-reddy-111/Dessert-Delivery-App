import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../redux/index';
import Cookies from "universal-cookie";
import { useNavigate } from 'react-router-dom';
const cookies=new Cookies();


const Login = () => {
  const [email,setEmail]=useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  const dispatch=useDispatch();
  const navigate=useNavigate();

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
          console.log("result",result);
          dispatch(actionCreators.loginSuccess("leena"));
          navigate('/');
      })
      .catch((error) => {
        console.log("error",error);
        dispatch(actionCreators.loginFailure(error));
      });

  }

  return (
    <div className="bg-white shadow-md rounded-lg px-8 py-10 mx-auto w-full max-w-md border-4 mt-20">
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
          <a href="" className="text-sm text-yellow-500 hover:underline">
            Forgot Password?
          </a>
          <a href="/register" className="text-sm text-yellow-500">
            New User? <span className='hover:underline font-bold'>Register Here</span>
          </a>
        </div>
        <button
          type="submit"
          className="w-full flex justify-center items-center py-2 px-4 text-sm font-medium text-white bg-yellow-500 rounded-lg hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
          onClick={(e)=>handleSubmit(e)}
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
