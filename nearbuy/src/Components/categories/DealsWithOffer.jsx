import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./DealsWithOffer.css";
 
// deals with offers section-1 in catregory page


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
        <SwiperSlide className="raviSlider1"><img src="./Category/categCrousal1/categCrousal1-img1.png" alt="Error"/></SwiperSlide>
        <SwiperSlide className="raviSlider1"><img src="./Category/categCrousal1/categCrousal1-img2.png" alt="Error"/></SwiperSlide>
        <SwiperSlide className="raviSlider1"><img src="./Category/categCrousal1/categCrousal1-img3.png" alt="Error"/></SwiperSlide>
        <SwiperSlide className="raviSlider1"><img src="./Category/categCrousal1/categCrousal1-img4.png" alt="Error"/></SwiperSlide>
      </Swiper>
    </>
  );
}

