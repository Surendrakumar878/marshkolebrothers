import React from 'react'
import benner from "../../assets/images/main-banner.jpg"
import { Button } from 'antd'
const Leanding = () => {
  return (
    <div className='h-[500px] bg-center sm:h-[500px] bg-no-repeat' style={{backgroundImage:`url(${benner})`}}  >
      <div className='text-left text-[24px] xl:text-[45px] text-white px-4 xl:px-44 pt-14 xl:pt-20 font-bold '> Are you looking for Online Legal Services? You are in the Right Place.</div>
      <Button style={{backgroundColor:"gray"}} className='xl:px-12 ml-4 xl:ml-44 my-4 text-white font-semibold'>Our Company </Button>
    </div>
  )
}

export default Leanding
