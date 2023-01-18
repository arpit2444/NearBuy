import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export const TopBrands = () => {
  return (
    <div>
      <Swiper
        slidesPerView={7}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[ Navigation]}
        // className="mySwiper"
      >
        <SwiperSlide><img width={"120px"} src="https://img4.nbstatic.in/tr:w-350/60e40fd61e2731000b5adac7.jpg" alt="Error"/></SwiperSlide>
        <SwiperSlide><img width={"120px"} src="https://img4.nbstatic.in/tr:w-350/60266a4279600c000b33f266.jpg" alt="Error"/></SwiperSlide>
        <SwiperSlide><img width={"120px"} src="https://img4.nbstatic.in/tr:w-350/604a00f979600c000c8c1b1e.jpg" alt="Error"/></SwiperSlide>
        <SwiperSlide><img width={"120px"} src="https://img4.nbstatic.in/tr:w-350/60374bd000106d000bde80e6.jpg" alt="Error"/></SwiperSlide>
        <SwiperSlide><img width={"120px"} src="https://img4.nbstatic.in/tr:w-350/634d23c022b317000b5a2fcd.jpg" alt="Error"/></SwiperSlide>
        <SwiperSlide><img width={"120px"} src="https://img4.nbstatic.in/tr:w-350/634d23c022b317000b5a2fcd.jpg" alt="Error"/></SwiperSlide>
        <SwiperSlide><img width={"120px"} src="https://img4.nbstatic.in/tr:w-350/634d23c022b317000b5a2fcd.jpg" alt="Error"/></SwiperSlide>
        <SwiperSlide><img width={"120px"} src="https://img4.nbstatic.in/tr:w-350/6026887f79600c000b33f357.jpg" alt="Error"/></SwiperSlide>
        <SwiperSlide><img width={"120px"} src="https://img4.nbstatic.in/tr:w-350/60f930521e2731000b9bdf2d.jpg" alt="Error"/></SwiperSlide>
        <SwiperSlide><img width={"120px"} src="https://img4.nbstatic.in/tr:w-350/60266a4279600c000b33f266.jpg" alt="Error"/></SwiperSlide>
        <SwiperSlide><img width={"120px"} src="https://img4.nbstatic.in/tr:w-350/60e40fd61e2731000b5adac7.jpg" alt="Error"/></SwiperSlide>
        <SwiperSlide><img width={"120px"} src="https://img4.nbstatic.in/tr:w-350/60e40fd61e2731000b5adac7.jpg" alt="Error"/></SwiperSlide>
        <SwiperSlide><img width={"120px"} src="https://img4.nbstatic.in/tr:w-350/60e40fd61e2731000b5adac7.jpg" alt="Error"/></SwiperSlide>
        
      </Swiper>
      {/* <img src="./categoryImages/topBrand/herebuy.png" alt="Error" /> */}
      <img src="./categoryImages/topBrand/top-brand-img1.wepb" alt="" />
      

    </div>
  );
}
