import { Box, HStack, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Ratings } from './Ratings'
// import { useNavigate } from 'react-router-dom'

export const Products = ({ props }) => {
    const { title, location, type, mrp, price, rating, imageUrl } = props

    // const navigate = useNavigate()

    // const singleProductData = (prod) => {
    //     navigate({ pathname: '/SingleProduct' }, { state: prod })
    // } 


    let shortTitle = title.split("")?.filter((el, i) => i <= 27);
    

    return (

        <Box w={"300px"} h={"380px"} m={"20px auto"} fontSize={"13px"} boxShadow={"rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px"} borderRadius={"5px"} overflow={'hidden'} cursor={"pointer"}
            // onClick={()=>{singleProductData(props)}}
            _hover={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px", transform: "translate(0, -5px)" }} transition={"0.3s"}>

            <Box w={"100%"} position={"relative"}>
                <Ratings rating={rating}/>
                <Image src={imageUrl} width={"100%"} alt="demo" />
            </Box>

            <Stack h={"190px"} justify={"space-between"} w={"100%"} p={"10px 12px"}>

                <Box>
                    <Text textAlign={"left"} fontWeight={"500"} fontSize={"16px"}>{shortTitle}{title.length > 30 ? "..." : ""}</Text>
                    <Text fontWeight={"400"} color={"gray.500"} m={"0px"} textAlign={"left"} fontSize={"13px"}>{location}</Text>
                    <Text fontWeight={"400"} color={"gray.500"} mt={"15px"} textAlign={"left"} fontSize={"13px"}>{type}</Text>
                </Box>

                <Box>
                    <hr></hr>

                    <HStack pt={"20px"} justify={"space-between"} align={"center"}>

                        <Stack lineHeight={"8px"} letterSpacing={"2px"}>
                            <Text m={"0"} fontSize={"11px"} color={"gray.500"} fontWeight={"500"} textDecor={"line-through"} textAlign={"left"}>₹{mrp}</Text>
                            <Text mt={"0"} color={"green"} fontWeight={"500"} fontSize={"18px"} textAlign={"left"}>₹{price}</Text>
                        </Stack>

                        <Box fontWeight={"500"} color={"#ef5d58"} bg={"#fff6f5"} p={"2px 10px"}>
                            {Math.floor((mrp - price) * 100 / mrp)}% OFF
                        </Box>

                    </HStack>

                </Box>

            </Stack>

        </Box>
    )
}
