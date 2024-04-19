import React from 'react'
import image from '../images/frontpageimage.avif'
const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
      <div className='max-h-[500px] relative'>
        {/*Overlay*/}
        <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
            <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-yellow-500'>Best</span></h1>
            <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'><span className='text-yellow-500'>Desserts</span> Delivered</h1>
        </div>
        <img className='w-full max-h-[500px] object-cover object-center' src={image} alt="/" loading="lazy"/>
      </div>
    </div>
  )
}

export default Hero

