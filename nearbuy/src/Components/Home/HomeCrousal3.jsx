import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import "./HomeCrousal3.css"

export const Homecrousal3 = () => {

let arrOfCrousal3 = [
    "./HomeImages/Homecrousal3/homeCrousal3img1.png",
    "./HomeImages/Homecrousal3/homeCrousal3img2.png",
    "./HomeImages/Homecrousal3/homeCrousal3img3.png",
    "./HomeImages/Homecrousal3/homeCrousal3img4.png",
    "./HomeImages/Homecrousal3/homeCrousal3img5.png",
    "./HomeImages/Homecrousal3/homeCrousal3img6.png",
    "./HomeImages/Homecrousal3/homeCrousal3img7.png",
    "./HomeImages/Homecrousal3/homeCrousal3img8.png",
    "./HomeImages/Homecrousal3/homeCrousal3img9.png",
    "./HomeImages/Homecrousal3/homeCrousal3img10.png",
    "./HomeImages/Homecrousal3/homeCrousal3img11.png",
    "./HomeImages/Homecrousal3/homeCrousal3img12.png",
    "./HomeImages/Homecrousal3/homeCrousal3img13.png",
    "./HomeImages/Homecrousal3/homeCrousal3img14.png",
    "./HomeImages/Homecrousal3/homeCrousal3img15.png",
    "./HomeImages/Homecrousal3/homeCrousal3img16.png"
]

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
        className="homeCrousal3"
      >
        {
            arrOfCrousal3.map((el)=>{
              return  <SwiperSlide><img width={"120px"} src={el} alt="Error"/></SwiperSlide>
            })
        }
      </Swiper>
    </div>
  );
}
