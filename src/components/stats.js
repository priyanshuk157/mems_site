import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"; 
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import jai from "./images/yeih.jpg"
import jai1 from "./images/statimg.jpg"
import jai2 from "./images/statimg2.jpg"

import "./news.css";
const Stats = () => {
  return (
   <>
   <Swiper
   style={{
    "--swiper-navigation-color": "#000",
    "--swiper-navigation-size": "0px",
   
  }}    
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation , Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><div className='swiper-cont'> <img src={jai} alt='' /></div></SwiperSlide>
        <SwiperSlide><div className='swiper-cont'><img src={jai1} alt='' /></div></SwiperSlide>
        <SwiperSlide><div className='swiper-cont'><img src={jai2} alt='' /></div></SwiperSlide>
      
        {/* <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide> 
        <SwiperSlide>Slide 7</SwiperSlide> 
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
   </>
  )
}

export default Stats
