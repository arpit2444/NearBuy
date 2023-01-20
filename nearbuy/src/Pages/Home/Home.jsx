
import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ProductCarousel } from "../../Components/Carousal/ProductCarousel";
import { FooterBott } from "../../Components/Footer/FooterBott"
import { FooterMid } from "../../Components/Footer/FooterMid"
import { FooterTop } from "../../Components/Footer/FooterTop";
import { Buffet } from "../../Components/Home/Buffet";
import { Categories } from "../../Components/Home/Categories";
import { Hangout } from "../../Components/Home/Hangouts";
import {HomeCrousal1}  from "../../Components/Home/HomeCrousal1";
import { HomeCrousal2 } from "../../Components/Home/HomeCrousal2";
import { Homecrousal3 } from "../../Components/Home/HomeCrousal3";
import { HomeCrousal4 } from "../../Components/Home/HomeCrousal4";
import axios from "axios"


export const Home = () => {

 const [data,setData] = useState([]);

 const getData = () => {
     axios.get("http://localhost:8080/restaurants").then((res)=>{
        //  console.log(res.data);
       setData(res.data)

     })
 }

 useEffect(()=>{
    getData();
 },[])

    return (
        <>

            {/* Add home page layouts in the below Box */}
            <Box>
                <Categories/>
                <HomeCrousal1/>
                <HomeCrousal2/>
                <Homecrousal3/>
                <Buffet/>
                <HomeCrousal4/>
                <Hangout/>
                <ProductCarousel data={data}/>
            </Box>

            {/* Below Box is for Footer*/}

            <Box w={"100%"} mt={"50px"}>

                <FooterTop/>

                <FooterMid/>

                <FooterBott/>

            </Box>
        </>
    )
}