import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';
import trustpilot from "../../assets/images/trustpilot.webp"
// import required modules
import { Pagination,Autoplay } from 'swiper/modules';
const WeAreAssociated = () => {
  return (
    <div>
       <>
       <div className='text-center  sm:text-xl  font-bold'> WE ARE </div>
       <div className='text-center  sm:text-2xl font-bold '> ASSOCIATED WITH: </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay,Pagination]}
        className="mySwiper"
      >
       {[1,1,1,1,1,1,1,1,1,1,]?.map(()=><SwiperSlide>  <img className='w-[40%]' src={trustpilot} alt="" /> </SwiperSlide>)}
        
      </Swiper>
    </>
    </div>
  )
}

export default WeAreAssociated
