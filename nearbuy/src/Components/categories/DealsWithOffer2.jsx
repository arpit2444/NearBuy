

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./DealsWithOffer2.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export const DealsWithOffers2 = () => {
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
        className="raviSwipper2"
      >
        <SwiperSlide className="raviSlider2"><img src="https://img4.nbstatic.in/tr:w-2800/63bfd7658db992000b7a1855.jpg" alt="Error"/></SwiperSlide>
        <SwiperSlide className="raviSlider2"><img src="https://img4.nbstatic.in/tr:w-2800/63bfd77d8db992000b7a1857.jpg" alt="Error"/></SwiperSlide>
        <SwiperSlide className="raviSlider2"><img src="https://img4.nbstatic.in/tr:w-2800/63bfd77722b317000b618a4c.jpg" alt="Error"/></SwiperSlide>
        <SwiperSlide className="raviSlider2"><img src="https://img4.nbstatic.in/tr:w-2800/63bfd7718db992000b7a1856.jpg" alt="Error"/></SwiperSlide>
      </Swiper>
    </>
  );
}

