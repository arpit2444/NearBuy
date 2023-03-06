
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
import { HomeCrousal3, Homecrousal3 } from "../../Components/Home/HomeCrousal3";
import { HomeCrousal4 } from "../../Components/Home/HomeCrousal4";
import axios from "axios"
import { QuickBite } from "../../Components/Home/QuickBite";
import { Mind } from "../../Components/Home/Mind";
import { HomeCrousal5 } from "../../Components/Home/HomeCrousal5";
import { SalonServices } from "../../Components/Home/SalonServices";
import { HomeCrousal6 } from "../../Components/Home/HomeCrousal6";
import { Massages } from "../../Components/Home/Massage";
import "./Home.css"

// Home page


export const Home = () => {

    return (
        <>

            {/* Add home page layouts in the below Box */}
            <Box>
                <Categories/>
                <HomeCrousal1/>
                <HomeCrousal2/>
                <HomeCrousal3/>
                <Buffet/>
                <HomeCrousal4/>
                <Hangout/>
                <ProductCarousel/>
                <QuickBite/>
                <Mind/>
                <HomeCrousal5/>
                <SalonServices/>
                <HomeCrousal6/>
                <Massages/>
                <div className="allOffers">
                 <button>VIEW ALL OFFERS</button>
                </div>
            </Box>

            {/* Below Box is for Footer*/}

            <Box className="home1">

                <FooterTop/>

                <FooterMid/>

                <FooterBott/>

            </Box>
        </>
    )
}