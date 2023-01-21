import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { Box, Button } from '@chakra-ui/react';
// import { Products } from './Products';
import { useEffect, useState } from 'react';
import axios from 'axios';
import "./Hotspots.css"

const Prev = (props) => {
    // console.log(props);
    const { className, onClick } = props;
    return (
        <>
            <Box borderRadius={"3px"} bg={"white"} marginTop="50px" p={"30px 8px"} zIndex={"10"} position={"absolute"} top={"20%"} left={"0px"} onClick={onClick} boxShadow={"rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"}>
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
            <Box borderRadius={"3px"} marginTop="50px"  bg={"white"} p={"30px 8px"} zIndex={"10"} position={"absolute"} top={"20%"} right={"0px"} onClick={onClick} boxShadow={"rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"}>
                <GrNext fontSize={"20px"} color={"#3f4246"} />
            </Box>
        </>
    );
};

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

export const HotSpots = () => {

    const settings = {
        dots: false,
        // below option is used for scroll inifite function set true to use.
        infinite: true,
        // space: 100,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        className:'slideTopHangout',
        responsive: [
            {
                breakpoint: 1240,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 840,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 590,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };

    return (
        <>
        <Box className="hangouts">
           <h1>Buzzing Hotspots</h1>
           <Box>
           <Slider {...settings} prevArrow={<Prev />} nextArrow={<Next />} >
        {
            arrOfHangouts.map((el)=>(
                
            <div className="hangout-Slides">
                <img src={el.image} alt="Error"/>
                <div>
                    <h2>{el.name}</h2>
                    <p>{el.offers} Offers |</p>
                    <p>Starting from {el.price}</p>
                </div>
            </div>
            ))
        }   
        
      </Slider>
           </Box>
        </Box>
        </>
    )
}