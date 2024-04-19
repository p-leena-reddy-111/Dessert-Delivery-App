import React, { useState } from 'react'
import axios from 'axios';
import Cookies from "universal-cookie";
import image from "../images/frontpageimage.avif";
const cookies=new Cookies();
const Register = () => {
  const [username,setUsername]=useState("");
  const [addressLine1,setAddressLine]=useState("");
  const [city,setCity]=useState("");
  const [state,setState]=useState("");
  const [email,setEmail]=useState("");
  const [password, setPassword] = useState("");
  const [firstname,setFirstName]=useState("");
  const [lastname,setLastName]=useState("");

  const [register,setRegister]=useState(false);

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const configuration={
      method:"post",
      url:"http://localhost:8800/user/register",
      data:{
        username,
        addressLine1,
        city,
        state,
        email,
        password,
        firstname,
        lastname,
      },
    };
    
    await axios(configuration)
      .then((result) => {
          cookies.set("TOKEN", result.data.token, {
          path: "/",
        });
        setRegister(true);
        alert('User registered successfully!');
        window.location.href="/";
      })
      .catch((error) => {
        error = new Error();
      });

  }
  return (
    <div>
      <div className='flex items-center justify-between gap-6'>  
        <div className="hidden md:flex max-w-[1000px]">
          <img className="object-cover h-screen" src={image} alt="/"></img> 
        </div>
        <div className="bg-white shadow-md rounded-lg px-8 py-5 mx-auto lg:mx-auto w-full md:max-w-md border-4 mt-20 max-w-sm md:mr-5">
        <h2 className="text-2xl font-bold text-black mb-6">Register</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-2">
            <label className="block text-sm font-medium text-black mb-2">
              Username *
            </label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
              className="shadow-sm bg-gray-50 border border-gray-300 rounded-lg w-full py-2 px-3 text-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
              required
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-medium text-black mb-2">
              Address Line 1 *
            </label>
            <input
              type="text"
              name="addressLine1"
              value={addressLine1}
              onChange={(e)=>setAddressLine(e.target.value)}
              className="shadow-sm bg-gray-50 border border-gray-300 rounded-lg w-full py-2 px-3 text-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
              required
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-medium text-black mb-2">
              City *
            </label>
            <input
              type="text"
              name="city"
              value={city}
              onChange={(e)=>setCity(e.target.value)}
              className="shadow-sm bg-gray-50 border border-gray-300 rounded-lg w-full py-2 px-3 text-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
              required
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-medium text-black mb-2">
              State *
            </label>
            <input
              type="text"
              name="state"
              value={state}
              onChange={(e)=>setState(e.target.value)}
              className="shadow-sm bg-gray-50 border border-gray-300 rounded-lg w-full py-2 px-3 text-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
              required
            />
          </div>
          <div className="mb-2">
            <label  className="block text-sm font-medium text-black mb-2">
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
          <div className="mb-2">
            <label className="block text-sm font-medium text-black mb-2">
              Password *
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow-sm bg-gray-50 border border-gray-300 rounded-lg w-full py-2 px-3 text-sm focus:outline-none  focus:border-yellow-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center items-center py-2 px-4 text-sm font-medium text-white bg-yellow-500 rounded-lg hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500" 
            onClick={(e)=>handleSubmit(e)}
          >
            Register
          </button>
          <div className='mt-2'>
            <a href="/login" className="text-sm text-yellow-500">
                    Already have an account? <span className='hover:underline font-bold'>Login</span>
                </a>
          </div>
        </form>
      </div>
      {
        register? (<div className='px-8 py-3 mx-auto mt-3 w-full max-w-md'>
        <p className="text-green-500">You Are Registered Successfully!</p>
         </div>):(<></>)
      }
      </div>
    </div>
  )
}

export default Register
