import React, { useEffect, useState } from 'react'
import {IoTimer} from 'react-icons/io5'
import {FaStar} from 'react-icons/fa';
import {LuDot} from 'react-icons/lu';
import { BiSolidFoodMenu } from "react-icons/bi";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../redux/index';
import { useSelector } from 'react-redux';

const DessertItems = () => {
    
    const dispatch = useDispatch();
    const cart=useSelector((state)=> state.cartAddedItems);

    const [isLoading,setIsLoading]=useState(false);
    const [error,setError]=useState(null);
    const [bakery,setBakery]=useState();
    const {bakeryId}=useParams();

    const fetchBakeryData=async()=>
    {
        setIsLoading(true);
        try
        {
            const response=await axios.get(`http://localhost:8800/bakeries/${bakeryId}`);
            setBakery(response.data);
        }
        catch(error)
        {
            setError(error);
        }
        finally{
            setIsLoading(false)
        }
    }

    useEffect(()=>{
        fetchBakeryData();
    },[bakeryId])
    

    return (
        <div>
            {/* Bakery Name, type, ratings..*/}
            {isLoading && <p>Loading data...</p>}
            {error && <p>Error:{error.message}</p>}
            { bakery && <div className='max-w-[1640px] m-3'>
                        <div className='max-h-[700px] border-4 relative overflow-hidden '>
                            <p className='text-center font-extrabold sm:text-5xl md:text-6xl lg:text-7xl'>{bakery.name}</p>
                            <p className='text-center font-bold sm:text-1xl md:text-2xl lg:text-3xl my-2'>{bakery.description}</p>

                            <div className='ml-2 mb-2 flex flex-col items-center justify-between'>
                                <div className='flex flex-row items-center gap-3 '>
                                    <span className='bg-green-600 text-white p-1 px-2 rounded-xl flex items-center ml-1 font-bold'>
                                    {bakery.rating} 
                                    <FaStar className='fill-white ml-1'/>
                                    </span>
                                    <p>{bakery.noOfRatings} ratings</p>
                                </div>
                                <div className='flex flex-row justify-center items-center mt-2 bg-gray-300 rounded-full p-2 text-sm sm:text-base md:text-lg '>
                                    <p className='flex items-center'><IoTimer className='fill-green-600'/>30 mins</p>
                                    <p className='flex flex-row items-center'><span><LuDot/></span>2.5 km</p>
                                    <p className='flex flex-row items-center'><span><LuDot/></span>{bakery.city}</p>
                                </div>
                            </div>
                        </div>

                    <div className='flex flex-col items-center'>
                        <div className='max-w-[1640px] m-4 flex justify-center items-center'>
                            <p className='text-black text-center mr-2 font-bold sm:text-1xl md:text-2xl lg:text-3xl'>MENU</p>
                            <BiSolidFoodMenu className='fill-black' size={25} />
                        </div> 
                    </div> 
                    </div>
            }

        

            {/*Menu Items*/}
            <div className='grid grid-cols-1 gap-4'>
                
            </div>
            {bakery && bakery.menu.dessert_items.map((menuItem,index)=>
                       ( <div key={index} className='grid md:px[100px] lg:px-[300px]'>
                            <div className="relative pb-2 m-3">
                                <div className='flex flex-row justify-between'>
                                    <div >
                                        <p className='font-extrabold text-2xl max-w-[200px] md:max-w-[600px]'>{menuItem.name}</p>
                                        <p className='font-semibold text-1xl'>₹{menuItem.price}</p>
                                        <p className='flex flex-row items-center py-3'><span><FaStar className='fill-green-500'/></span>4.6</p>
                                        <p className='text-sm sm:text-base md:text-base  max-w-[300px] md:max-w-[600px] overflow-auto break-words'>{menuItem.description}</p>
                                    </div>
                                    <div className='flex flex-col justify-center'>
                                        <img className='w-[150px] h-[150px] object-cover rounded-xl justify-center'src={menuItem.image} alt={menuItem.name} loading="lazy"/>
                                        <div className='flex justify-center'>
                                        {cart.desserts.find((item) => item._id === menuItem._id) ? (
                                            <button className="bg-white text-yellow-500  font-bold px-2 py-2 me-1 rounded-1xl  hover:bg-yellow-500 hover:text-white hover:border-yellow-500 mt-[-20px]">
                                                    <div className='flex gap-6'>
                                                        <p onClick={()=>dispatch(actionCreators.removeFromCart(menuItem))} className='font-extrabold px-2'>-</p>
                                                        <span className='font-extrabold'>{cart.desserts.find((item) => item._id === menuItem._id).quantity}
                                                        </span>
                                                        <p onClick={()=>dispatch(actionCreators.addToCart(menuItem))} className='font-extrabold px-2'>+</p>
                                                    </div>
                                            </button> 
                                        ) : (
                            
                                            <button className="bg-white text-yellow-500  font-bold px-10 py-2 rounded-1xl  hover:bg-yellow-500 hover:text-white hover:border-yellow-500 mt-[-20px]" onClick={()=>dispatch(actionCreators.addToCart(menuItem))}>ADD</button>
                                        )}
                                        {/*<button onClick={()=>setCartItemsCount(setCartItemsCount+1)} className="bg-white text-yellow-500  font-bold px-10 py-2 rounded-3xl  hover:bg-yellow-500 hover:text-white hover:border-yellow-500 mt-[-20px]">ADD</button>*/}
                                        </div>
                                    </div>
                                </div>
                                <div className='my-3'>
                                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200"></div>
                                </div>
                            </div>
                        </div>
                   ))}


        </div>  
    ) 
}

export default DessertItems;

 