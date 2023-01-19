import { Box } from "@chakra-ui/react"
import "./Hangout.css";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "../categories/Hotspots.css;

// import required modules
import { Pagination, Navigation } from "swiper";

export const Hangout = () => {

    const arrOfHangouts = [
       {
        image: "./HomeImages/Hangout/hangout-img1.png",
        name: "Cannaught Place",
        offers: 25,
        price: 99
       },
       {
        image: "./HomeImages/Hangout/hangout-img2.png",
        name: "Club Road",
        offers: 10,
        price: 59
       },
       {
        image: "./HomeImages/Hangout/hangout-img3.png",
        name: "Aerocity",
        offers: 8,
        price: 599
       },{
        image: "./HomeImages/Hangout/hangout-img4.png",
        name: "Hauz Khas Village",
        offers: 6,
        price: 49
       },{
        image: "./HomeImages/Hangout/hangout-img5.png",
        name: "Rajouri Garder Main Market",
        offers: 6,
        price: 299
       },{
        image: "./HomeImages/Hangout/hangout-img6.png",
        name: "Maharaja Surajmal Road",
        offers: 5,
        price: 750
       },{
        image: "./HomeImages/Hangout/hangout-img7.png",
        name: "Janpath",
        offers: 4,
        price: 450
       },{
        image: "./HomeImages/Hangout/hangout-img8.png",
        name: "New Friends Colony Market",
        offers: 4,
        price: 206
       },{
        image: "./HomeImages/Hangout/hangout-img9.png",
        name: "IGI T3 Road",
        offers: 4,
        price: 2095
       },{
        image: "./HomeImages/Hangout/hangout-img10.png",
        name: "Epicuria",
        offers: 3,
        price: 899
       },
    ]

    return (
        <>
        <Box className="hangouts">
           <h1>Popular Hangouts</h1>
           <Box>
           <Swiper
        slidesPerView={6}
        spaceBetween={20}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[ Navigation]}
        className="hangout-Swiper"
      >
        {
            arrOfHangouts.map((el)=>{
                return <SwiperSlide className="hangout-Slides">
            <div>
                <img src={el.image} alt="Error"/>
                <div>
                    <h2>{el.name}</h2>
                    <p>{el.offers} Offers |</p>
                    <p>Starting from {el.price}</p>
                </div>
            </div>
            </SwiperSlide>
            })
        }
        
      </Swiper>
           </Box>
        </Box>
        </>
    )
}