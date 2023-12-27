import React from 'react'
import img from "../../assets/images/about-us.webp"
const AboutUs = () => {
  return (
    <div>
      <div class="flex justify-center">
<div class="flex flex-col w-full justify-center items-center">
   
    <div class="overflow-hidden m-auto w-full sm:px-24 bg-white  shadow-lg flex flex-col md:flex-row justify-center">
        <div class="sm:w-1/2 p-2">
            <div class="font-bold text-2xl text-black m-2 "> About Us
                </div>
            <div class="text-gray-500 m-2 text-sm"><a href="">FastInfo Legal Services Pvt Ltd. is registered under the Companies Act, 2013, recognised by the Govt. of India, which is specialized in providing legal help and providing people legal information just in their hands to easily use it.

Our core team consists of skilled and proficient qualified Advocates, along with a diligent team of other professionals, all under one roof. They provide solution to all the individual, business person, corporate body and others to get better help for the issues faced by them in their everyday life.

 </a></div>
                    <button className='text-gray-800 m-2 text-sm'>Click Here {'>'}  </button>
        </div>

        <div class="h-26 sm:w-1/2  w-full overflow-hidden"> <img src={img} alt=""
                class="" /> </div>
    </div>
   
</div>
</div>

    </div>
  )
}

export default AboutUs
