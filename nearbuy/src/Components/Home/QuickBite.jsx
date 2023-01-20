import { Box } from "@chakra-ui/react";
import "./QuickBite.css";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";


let arrOfQuickBites = [
    "./HomeImages/QuickBite/QuickBites-img1.png",
    "./HomeImages/QuickBite/QuickBites-img2.png",
    "./HomeImages/QuickBite/QuickBites-img3.png",
    "./HomeImages/QuickBite/QuickBites-img4.png",
    "./HomeImages/QuickBite/QuickBites-img5.png",
    "./HomeImages/QuickBite/QuickBites-img6.png",
]

export const QuickBite = () => {
    return (
        <Box className="quickBite">
            <Box className="quickBite1">
              <h1>Quick Bites</h1>
              <img src="./HomeImages/Buffet/hamburger.png" alt="" />
            </Box>
            <Box className="quickBite2">
                {
                    arrOfQuickBites.map((el)=>{
                        return <img src={el} alt="Error"/>
                    })
                }
            </Box>
        </Box>
    )
}