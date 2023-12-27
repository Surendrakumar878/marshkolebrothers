import React from 'react'
import img2 from "../../assets/images/about/TEDx.webp"
import img1 from "../../assets/images/about/businessman-of-the-year.webp"
import img3 from "../../assets/images/about/IIT.webp"
const EventsGallery = () => {
  const event=[{
    name:" Businessman of the Year",
    img:img1
  },
  {
    name:" TEDx",
    img:img2
  },
  {
    name:" IIT Kharagpur",
    img:img3
  }
]
  return (
    <div>
      <div>
        <div className='font-bold sm:my-10 text-center sm:text-4xl '> Events Gallery </div>
       <div class=" flex justify-center">
   <div class="flex flex-col md:grid md:grid-cols-3 md:gap-8 max-w-7xl justify-center items-center">
     {event?.map((e)=>  
     <div class="overflow-hidden w-full md:w-full bg-white m-4 shadow-sm flex flex-col justify-center">
           <div class="h-26 w-full overflow-hidden"> <img src={e.img}
                   alt="" class="" /> </div>
           {/* <div class="text-sm text-gray-500 m-2">30 March, 2023</div> */}
           <div class="font-bold text-lg text-black m-2">{e.name}


.
           </div>
         <div class="flex justify-between">
               <div class="flex m-2">
                   {/* <ion-icon name="chatbubble-outline" class="m-1 text-gray-500"></ion-icon> */}
                   {/* <div class="text-gray-500 m-1 mb-4 text-sm">Click Here {">"}</div> */}
                   <ion-icon name="eye-outline" class="m-1 text-gray-500"></ion-icon>
                   <div class="text-gray-500 m-1 mb-4 text-sm"></div>
               </div>
               <div class="m-2">
                   <ion-icon name="share-social-outline"
                       class="m-1 text-blue-500 hover:text-pink-400 cursor-pointer text-xl "> </ion-icon>
               </div>
           </div>
       </div>)}
       
   </div>
</div>

    </div>
    </div>
  )
}

export default EventsGallery
