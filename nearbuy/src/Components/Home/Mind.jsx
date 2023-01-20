import { Box } from "@chakra-ui/react";
import "./Mind.css";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";


let arrOfQuickBites = [
    "./HomeImages/Mind/mind-img1.png",
    "./HomeImages/Mind/mind-img2.png",
    "./HomeImages/Mind/mind-img3.png",
    "./HomeImages/Mind/mind-img4.png",
    "./HomeImages/Mind/mind-img5.png",
    "./HomeImages/Mind/mind-img6.png",
]

export const Mind = () => {
    return (
        <Box className="mind">
              <h1>Next Thing On Your Mind</h1>
            <Box className="mind2">
                {
                    arrOfQuickBites.map((el)=>{
                        return <img src={el} alt="Error"/>
                    })
                }
            </Box>
        </Box>
    )
}