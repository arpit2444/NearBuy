import { Box, HStack, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { TiStarFullOutline, TiStarHalfOutline, TiStarOutline } from 'react-icons/ti';

export const Ratings = ({ rating }) => {

    let pointRating = rating === 5 || 4 || 3 || 2 || 1 || 0 ? rating + ".0".toString() : rating.toString();

    let [round, decimal] = pointRating?.split(".").map(Number);
    let fullStars = new Array(5).fill(0)
    let Stared = new Array(round).fill(0)

    const findEmptyStars = (r, d) => {
        if (r !== 0 && d === 0) {
            return (5 - r)
        } else if (r !== 0 && d !== 0) {
            return (4 - r)
        } else if (r === 0) {
            return 5
        }
    }
    const foundEmptyStars = findEmptyStars(round, decimal);

    let emptyStars = new Array(foundEmptyStars).fill(0)



    return (
        <HStack justify={"center"} align={"center"} p={"2px 10px"} borderRadius={"4px"} bg={"white"} position={"absolute"} bottom="10px" left={"10px"} fontSize={"11px"}>

            <Text color={"#ea5753"} fontWeight={"500"}>hb</Text>

            <Text color={"gray.500"} fontWeight={"100"} position={"relative"} top={"-1px"}>|</Text>

            <HStack justify={"center"} align={"center"} fontSize={"12px"} color={"#ffc100"}>
                {
                    rating === 5 ? (
                        fullStars?.map((el, i) => <Text m={"0px 0px"} key={i}><TiStarFullOutline /></Text>)
                    ) : (
                        Stared?.map((el, i) => <Text m={"0px 0px"} key={i}><TiStarFullOutline /></Text>)
                    )
                }

                {
                    rating !== 5 && decimal && <Text m={"0px 0px"}><TiStarHalfOutline /></Text>
                }

                {
                    rating !== 5 && emptyStars && emptyStars?.map((el, i) => <Text m={"0px 0px"} key={i}><TiStarOutline /></Text>)
                }
            </HStack>

            <Text color={"gray.500"} fontWeight={"500"}>{rating}</Text>

        </HStack>
    )
}