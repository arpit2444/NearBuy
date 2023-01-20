import { Box, HStack, Image, Text, UnorderedList } from "@chakra-ui/react"
import { IoMdLock } from 'react-icons/io'
import './Navbar.css'
import { SearchPanel } from "./SearchPanel"
import { LocationPanel } from "./LocationPanel"
import { Authentication } from "../Authentication/Authentication"

export const Navbar = () => {

    return (
        <Box w={"100%"} position={"sticky"} top={"0"} bg={"white"}>

            <Box w={"100%"} fontSize={"12px"} bg={"#f1f1f1"}>

                <HStack m={"auto"} maxW={"1272px"} justify={"space-between"} align={"center"} color={"gray.500"} p={"5px"}>

                    <LocationPanel/>

                    <UnorderedList m={"0px"} p={"0px"} display={{ base: "none", sm: "none", md: "block", lg: "block" }}>
                        <HStack fontWeight={"500"} position={"relative"}>
                            <Text cursor={"pointer"} color={"#ef6864"}>We're hiring!</Text>
                            <Text position={"relative"} top={"-1px"}>|</Text>
                            <Text cursor={"pointer"}>How it Works</Text>
                            <Text position={"relative"} top={"-1px"}>|</Text>
                            <Text cursor={"pointer"}>List your Business</Text>
                            <Text position={"relative"} top={"-1px"}>|</Text>
                            <Authentication/>
                        </HStack>
                    </UnorderedList>

                </HStack>

            </Box>

            <Box w={"100%"} bg={"white"}>

                <HStack m={"auto"} maxW={"1272px"} justify={"space-between"} align={"center"} p={"5px"}>

                    <Box maxW={"140px"} ml={"4px"}>
                        <Image src="/HomeImages/herebuy.png" alt="herebuy" />
                    </Box>

                    <UnorderedList m={"0px"} p={"0px"} display={{ base: "none", sm: "none", md: "block", lg: "block" }}>
                        <SearchPanel />
                    </UnorderedList>

                </HStack>

                <hr></hr>

            </Box>

        </Box>
    )
}