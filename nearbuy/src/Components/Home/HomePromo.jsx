import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { Box, Button } from '@chakra-ui/react';
// import { Products } from './Products';
import { useEffect, useState } from 'react';
import axios from 'axios';
// import "./HomePromo.css"

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


export const HomePromoCodes = () => {

    
    // below is the amount of products want to show
    // data = data?.filter((e, i) => i<10)

    const settings = {
        dots: false,
        // below option is used for scroll inifite function set true to use.
        infinite: true,
        // space: 100,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1240,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 940,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    

    return (
        <Box w={"99%"} m={"auto auto 50px auto"}>

            <Slider {...settings} prevArrow={<Prev />} nextArrow={<Next />} >
            <div className="homePromo">
            <h1>Promo Codes For More Savings</h1>
            <div>
               <div className="homePromoCards">
                <img src="https://img4.nbstatic.in/tr:w-700/6299bae13b031b000ba75db4.jpeg" alt="Error" />
                <hr />
                <div>
                    <p>Valid till 31 Dec 2023</p>
                    <button>Know more</button>
                </div>
               </div>
               <div className="homePromoCards">
               <img src="https://img4.nbstatic.in/tr:w-700/6294bbe1b3c621000b366b85.jpeg" alt="Error" />
               <hr />
                <div>
                    <p>Valid till 02 Feb 2023</p>
                    <button>Know more</button>
                </div>
               </div>
               <div className="homePromoCards">
               <img src="https://img4.nbstatic.in/tr:w-700/636039fc22156b000cb5df05.jpeg" alt="Error" />
               <hr />
                <div>
                    <p>Valid till 31 Dec 2023</p>
                    <button>Know more</button>
                </div>
               </div>
            </div>
        </div>

            </Slider>
        </Box>
    );
};