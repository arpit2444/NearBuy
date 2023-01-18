import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Hotspots.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export const HotSpots = () => {
  return (
    <div>
        <h1>Buzzing Hotspots</h1>
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[ Navigation]}
        className="raviSwipper4"
      >
        <SwiperSlide className="raviSlider4"><div><img src="https://img4.nbstatic.in/tr:w-350/58502be5dc0e82000d1800c6.jpg" alt="Error"/>
        <div>
            <h2>Janpath</h2>
            <p>4 Offers |</p>
            <p>Starting from 450</p>
        </div>
        </div></SwiperSlide>
        <SwiperSlide className="raviSlider4"><div><img src="https://img4.nbstatic.in/tr:w-350/58d3616746e0fb000dc3ad7e.jpg" alt="Error"/>
        <div>
            <h2>Janpath</h2>
            <p>4 Offers |</p>
            <p>Starting from 450</p>
        </div>
        </div></SwiperSlide>
        <SwiperSlide className="raviSlider4"><div><img src="https://img4.nbstatic.in/tr:w-350/6385d1e822156b000c42f6de.jpg" alt="Error"/>
        <div>
            <h2>Janpath</h2>
            <p>4 Offers |</p>
            <p>Starting from 450</p>
        </div>
        </div></SwiperSlide>
        <SwiperSlide className="raviSlider4"><div><img src="https://img4.nbstatic.in/tr:w-350/6385c23a22b317000b621160.jpg" alt="Error"/>
        <div>
            <h2>Janpath</h2>
            <p>4 Offers |</p>
            <p>Starting from 450</p>
        </div>
        </div></SwiperSlide>
        <SwiperSlide className="raviSlider4"><div><img src="https://img4.nbstatic.in/tr:w-350/6385c23a22b317000b621160.jpg" alt="Error"/>
        <div>
            <h2>Janpath</h2>
            <p>4 Offers |</p>
            <p>Starting from 450</p>
        </div>
        </div></SwiperSlide>
        <SwiperSlide className="raviSlider4"><div><img src="https://img4.nbstatic.in/tr:w-350/6385f0f322156b000c42f91d.jpg" alt="Error"/>
        <div>
            <h2>Janpath</h2>
            <p>4 Offers |</p>
            <p>Starting from 450</p>
        </div>
        </div></SwiperSlide>
        <SwiperSlide className="raviSlider4"><div><img src="https://img4.nbstatic.in/tr:w-350/6385c37822156b000c42f696.jpg" alt="Error"/>
        <div>
            <h2>Janpath</h2>
            <p>4 Offers |</p>
            <p>Starting from 450</p>
        </div>
        </div></SwiperSlide>
        <SwiperSlide className="raviSlider4"><div><img src="https://img4.nbstatic.in/tr:w-350/5d8dff57d60180000d4965d6.jpg" alt="Error"/>
        <div>
            <h2>Janpath</h2>
            <p>4 Offers |</p>
            <p>Starting from 450</p>
        </div>
        </div></SwiperSlide>
        <SwiperSlide className="raviSlider4"><div><img src="https://img4.nbstatic.in/tr:w-350/584e7ec6dc0e82000d17f7dc.jpg" alt="Error"/>
        <div>
            <h2>Janpath</h2>
            <p>4 Offers |</p>
            <p>Starting from 450</p>
        </div>
        </div></SwiperSlide>
        <SwiperSlide className="raviSlider4"><div><img src="https://img4.nbstatic.in/tr:w-350/6385abff22156b000c42f5fb.jpg" alt="Error"/>
        <div>
            <h2>Janpath</h2>
            <p>4 Offers |</p>
            <p>Starting from 450</p>
        </div>
        </div></SwiperSlide>
      </Swiper>
    </div>
  );
}
