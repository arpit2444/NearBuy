import { Box } from "@chakra-ui/react"
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import "./HomeCrousal1.css"

// Crousal section-6 on home page

export const HomeCrousal6 = () => {
   return (
    <>
    <Box>
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
        <SwiperSlide className="raviSlider1"><img src="HomeImages/SalonImages/salonImages-img1.png" alt="Error"/></SwiperSlide>
        <SwiperSlide className="raviSlider1"><img src="HomeImages/SalonImages/salonImages-img3.png" alt="Error"/></SwiperSlide>
        <SwiperSlide className="raviSlider1"><img src="HomeImages/SalonImages/salonImages-img4.png" alt="Error"/></SwiperSlide>
        <SwiperSlide className="raviSlider1"><img src="HomeImages/SalonImages/salonImages-img5.png" alt="Error"/></SwiperSlide>
      </Swiper>
    </Box>
    </>
   )
  }