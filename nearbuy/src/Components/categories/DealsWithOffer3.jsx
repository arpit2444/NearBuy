

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./DealsWithOffer3.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export const DealsWithOffers3 = () => {
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
        className="raviSwipper3"
      >
        <SwiperSlide className="raviSlider3"><img src="https://img4.nbstatic.in/tr:w-2800/63bfd78a22b317000b618a4e.jpg" alt="Error"/></SwiperSlide>
        <SwiperSlide className="raviSlider3"><img src="https://img4.nbstatic.in/tr:w-2800/63bfd7818db992000b7a1858.jpg" alt="Error"/></SwiperSlide>
        <SwiperSlide className="raviSlider3"><img src="https://img4.nbstatic.in/tr:w-2800/63bfd78522b317000b618a4d.jpg" alt="Error"/></SwiperSlide>
        <SwiperSlide className="raviSlider3"><img src="https://img4.nbstatic.in/tr:w-2800/63bfd78f8db992000b7a185a.jpg" alt="Error"/></SwiperSlide>
      </Swiper>
    </>
  );
}

