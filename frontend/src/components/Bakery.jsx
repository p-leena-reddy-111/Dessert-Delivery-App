import React from 'react'
import { useState,useEffect } from 'react';
import {FaStar} from 'react-icons/fa';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const Bakery = () => {


  const [bakery,setBakery]=useState([]);
  const [isLoading,setIsLoading]=useState(false);
  const [error,setError]=useState(null);
  const navigate=useNavigate();
  const [nav,setNav]=useState(false)

  const handleBakeryClick=async(bakeries)=>
  {
    navigate(`/bakeries/${bakeries._id}`);
  }

  const fetchData=async()=>
  {
    setIsLoading(true);
    try{
      const response=await axios.get("http://localhost:8800/bakeries/");
      setBakery(response.data);

    }
    catch(error)
    {
      setError(error);
    }
    finally{
      setIsLoading(false);
    }
  }

  useEffect(()=>{
    fetchData();
  },[]);
  


  return (
    <div className='max-2-[1640px] m-auto px-4 py-12'>
      <h1 className='text-yellow-500 font-bold text-4xl text-center'>All Bakeries</h1>


      {/* Display bakeries */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {isLoading && <p>Loading data...</p>}
        {error && <p>Error:{error.message}</p>}
        { bakery && bakery.map((item, index) => (
          <div
            key={index}
            className='border shadow-lg rounded-lg hover:scale-105 duration-300'
            onClick={()=>handleBakeryClick(item)}
          >
            <img
              src={item.images}
              alt={item.name}
              className='w-full h-[200px] object-cover  rounded-t-lg'
            />
            <div className='px-2 py-4'>
              <p className='font-bold'>{item.name}</p>
              <p className='flex flex-row'>
                <span className='flex flex-row items-center bg-yellow-500 text-white px-2 rounded-3xl'>
                  {item.rating}
                  <FaStar className='bg-yellow-500 fill-white ml-1'/>
                </span>
                <p className='px-1'>({item.noOfRatings})</p>
              </p>
            </div>
            <div className='ml-2 mb-2 flex flex-col'>
              <p className='flex'>{item.description}</p>
              <p className='mr-2'>{item.street_address}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Bakery
