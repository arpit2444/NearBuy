

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./DealsWithOffer.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export const DealsWithOffers1 = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="raviSwipper1"
      >
        <SwiperSlide className="raviSlider1"><img src="https://img4.nbstatic.in/tr:w-2800/627b504f3b031b000b774d6d.jpg" alt="Error"/></SwiperSlide>
        <SwiperSlide className="raviSlider1"><img src="https://img4.nbstatic.in/tr:w-2800/627b506ab3c621000b5f5e89.jpg" alt="Error"/></SwiperSlide>
        <SwiperSlide className="raviSlider1"><img src="https://img4.nbstatic.in/tr:w-2800/627b505cb3c621000b5f5e88.jpg" alt="Error"/></SwiperSlide>
        <SwiperSlide className="raviSlider1"><img src="https://img4.nbstatic.in/tr:w-2800/627b50573b031b000b774d6e.jpg" alt="Error"/></SwiperSlide>
        <SwiperSlide className="raviSlider1"><img src="https://img4.nbstatic.in/tr:w-2800/627b50613b031b000b774d6f.jpg" alt="Error"/></SwiperSlide>
      </Swiper>
    </>
  );
}

