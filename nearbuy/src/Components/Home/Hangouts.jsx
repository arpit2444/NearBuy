import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { Box, Button } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import "./Hangout.css"

// Hangout section on home page

const Prev = (props) => {
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






export const Hangout = () => {
const [arrOfHangouts,setArrOfHangouts]= useState([]);

const getData=()=>{
    axios.get("https://herebuy-database.vercel.app/arrOfHangouts")
    .then(res=>setArrOfHangouts(res.data))
    .catch(err=>console.log(err))
}

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
useEffect(()=>{getData()},[])
    return (
        <>
        <Box className="hangouts">
           <h1>Popular Hangouts</h1>
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