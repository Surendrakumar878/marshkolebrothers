import { Image } from 'antd'
import React from 'react'

const OurBrands = () => {
  return (
    <div className='bg-sky-100'>
       
        <div className='font-bold sm:my-10 text-center sm:text-4xl py-4 '>    Our Brands </div>
      <div className='grid grid-cols-1 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-20 sm:py-10 w-[70%] m-auto sm:m-auto '> {[1,2,2,2].map(()=><Image className='p-5' width={"100%"} src='fastinfo-group.svg' preview={false}  />)} </div>
    </div>
  )
}

export default OurBrands
