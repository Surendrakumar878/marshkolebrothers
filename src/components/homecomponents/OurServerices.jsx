import React from 'react'
import img from "../../assets/images/services/Consumer-Complaint-OLI.webp"
import img2 from "../../assets/images/services/trademark.webp"
import img3 from "../../assets/images/services/GST-LOI.webp"
import img4 from "../../assets/images/services/fssai.webp"
import img5 from "../../assets/images/services/Corporate-Related-Services-OLI.webp"
import img6 from "../../assets/images/services/digital-signature.jpg"
import img7 from "../../assets/images/services/legal-advice-OLI.webp"
import img8 from "../../assets/images/services/fssai-renewal-1.webp"
import img9 from "../../assets/images/services/OLI-accountant-1.webp"
const OurServerices = () => {
    const service=[
        {
        name:"Consumer Complaint.",
        img:img,
        des:" Being a Consumer, at the time of purchase, one if deceived by the seller should be aware"
    },
    {
        name:"Trademark Registration Online",
        img:img2,
        des:" Get your Trademark registration from anywhere in India and protect your Brand Name/Logo/Slogan."
    },
    {
        name:"GST Services.",
        img:img3,
        des:" Being a Consumer, at the time of purchase, one if deceived by the seller should be aware"
    },
    {
        name:"FSSAI Registration",
        img:img4,
        des:" Being a Consumer, at the time of purchase, one if deceived by the seller should be aware"
    },
    {
        name:"Company Registration.",
        img:img5,
        des:" Being a Consumer, at the time of purchase, one if deceived by the seller should be aware"
    },]
  return (
    <div>
        <div className='font-bold sm:my-10 text-center sm:text-4xl '> Our Serverices </div>
       <div class=" flex justify-center">
   <div class="flex flex-col md:grid md:grid-cols-4 md:gap-2 max-w-7xl justify-center items-center">
     {service?.map((e)=>  
     <div class="overflow-hidden w-full md:w-full bg-white m-4 shadow-sm flex flex-col justify-center">
           <div class="h-26 w-full overflow-hidden"> <img src={e.img}
                   alt="" class="" /> </div>
           {/* <div class="text-sm text-gray-500 m-2">30 March, 2023</div> */}
           <div class="font-bold text-lg text-black m-2"> {e.name}
           </div>
           <div class="text-gray-500 m-2 text-sm"><a href="">
            {e.des}
           </a></div>
           <div class="flex justify-between">
               <div class="flex m-2">
                   {/* <ion-icon name="chatbubble-outline" class="m-1 text-gray-500"></ion-icon> */}
                   <div class="text-gray-500 m-1 mb-4 text-sm">Click Here {">"}</div>
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
  )
}

export default OurServerices
