import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { Box, Button } from '@chakra-ui/react';
// import { Products } from './Products';
import { useEffect, useState } from 'react';
import axios from 'axios';

import "./HomeCrousal3.css"

const Prev = (props) => {
    // console.log(props);
    const { className, onClick } = props;
    return (
        <>
            <Box borderRadius={"3px"} bg={"white"} p={"30px 8px"} zIndex={"10"} position={"absolute"} top={"20%"} left={"0px"} onClick={onClick} boxShadow={"rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"}>
                <GrPrevious fontSize={"20px"} color={"#3f4246"} />
            </Box>
        </>
    );
};

const Next = (props) => {
    // console.log(props);
    const { className, onClick } = props;
    return (
        <>
            <Box borderRadius={"3px"} bg={"white"} p={"30px 8px"} zIndex={"10"} position={"absolute"} top={"20%"} right={"0px"} onClick={onClick} boxShadow={"rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"}>
                <GrNext fontSize={"20px"} color={"#3f4246"} />
            </Box>
        </>
    );
};


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


export const HomeCrousal3 = () => {

    
    // below is the amount of products want to show
    // data = data?.filter((e, i) => i<10)

    const settings = {
        dots: false,
        // below option is used for scroll inifite function set true to use.
        infinite: true,
        // space: 100,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        initialSlide: 0,
        className:'sliderTop',
        responsive: [
            {
                breakpoint: 1240,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 940,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 3,
                }
            }
            ,
            {
                breakpoint: 440,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };
    

    return (
        <Box className='homeCrousal3'>
            <Box className='homeCrousal3_2'>
           <h1>Top Brands</h1>
           </Box>
            <Slider {...settings} prevArrow={<Prev />} nextArrow={<Next />} >
              {
                arrOfCrousal3.map((el)=>(
                  <div className='homeCrousal3_img'>
                     <img src={el} alt="Error"/>
                 </div>
                ))
              }
            </Slider>
        </Box>
    );
};


