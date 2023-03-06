import { Box, HStack, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Ratings } from './Ratings'
import  "./product.css"


// single product card

export const Products = ({key, props }) => {
    const { title, location, type, mrp, price, rating, imageUrl } = props



    let shortTitle = title.split("")?.filter((el, i) => i <= 27);
    

    return (

        <Box className='product'>

            <Box className='prod'>
                <Ratings rating={rating}/>
                <Image src={imageUrl} alt="demo" />
            </Box>

            <Stack className='prodStack'>

                <Box>
                    <Text className='prodTitle'>{shortTitle}{title.length > 30 ? "..." : ""}</Text>
                    <Text className='prodLocation'>{location}</Text>
                    <Text className='prodType'>{type}</Text>
                </Box>

                <Box>
                    <hr></hr>

                    <HStack className='prodHStack'>

                        <Stack className='prodStack2' >
                            <Text className='prodText2'>₹{mrp}</Text>
                            <Text className='prodText3'>₹{price}</Text>
                        </Stack>

                        <Box className='prodBox1'>
                            {Math.floor((mrp - price) * 100 / mrp)}% OFF
                        </Box>

                    </HStack>

                </Box>

            </Stack>

        </Box>
    )
}
