import { Drawer, DrawerBody, DrawerOverlay, DrawerContent, HStack, useDisclosure, Box, VStack, Text, Stack, Image } from '@chakra-ui/react'
import { HiOutlineSearch } from 'react-icons/hi'
import { RxCross1 } from 'react-icons/rx'
import { IoLocationSharp } from 'react-icons/io5'
import { IoMdThumbsUp } from 'react-icons/io'
import { RecommendedSearch } from './RecommendedSearch'
import { Link } from 'react-router-dom'
import { LocationPanel } from './LocationPanel'

const Recommended = [
    { title: "Spa & Massage", path: "" },
    { title: "Nail Extention in Nails", path: "" },
    { title: "Barbeque Nation", path: "" },
    { title: "Smaaash", path: "" },
    { title: "TOS - Take Off Scarlet, Punjabi Bagh West", path: "" },
    { title: "KFC", path: "" },
    { title: "Lord of the Drinks, Connaught Place", path: "" },
    { title: "Excuse Me Boss, CP", path: "" },
    { title: "Yes Minister - Pub & Kitchen, Hauz Khas", path: "" },
    { title: "Castle's Barbeque, Tilak Nagar", path: "" }
]

export const SearchPanel = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <HStack onClick={onOpen} color={"#ef6864"} justify={"center"} align={"center"} className={"searchBox"}>
                <HStack justify={"space-between"} align={"center"} className="inputBox">
                    <HiOutlineSearch />
                    <input disabled className="searchInput" type={"text"} placeholder={"Search restaurants, spa, events"} />
                </HStack>
                <button className="searchButton">SEARCH</button>
            </HStack>

            <Drawer placement={"top"} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>

                    <DrawerBody>

                        <Box w={"100%"} h={"97vh"} position={"relative"}>

                            <Stack m={"auto"} maxW={"1272px"}>

                                <HStack justify={"space-between"} align={"center"} color={"gray.500"} p={"5px"} position={"relative"} m={"15px 0px"}>

                                    <LocationPanel boolean={false} />

                                    <VStack justify={"center"} align={"center"} cursor={"pointer"} onClick={onClose} position={"relative"} top={"5px"}>
                                        <RxCross1 />
                                        <Text fontSize={"12px"} position={"relative"} top={"-10px"} m={"0px"}>ESC</Text>
                                    </VStack>

                                </HStack>

                                <Box>
                                    <HStack onClick={onOpen} color={"#ef6864"} justify={"flex-start"} align={"center"} className={"searchPanel"}>
                                        <HStack justify={"space-between"} align={"center"} className="inputBoxPanel">
                                            <HiOutlineSearch />
                                            <input className="searchInputPanel " type={"text"} placeholder={"Search restaurants, spa, events, things to do..."} />
                                        </HStack>
                                        <button className="searchButtonPanel">SEARCH</button>
                                    </HStack>
                                </Box>

                                <Box p={"20px 5px"}>
                                    <HStack>
                                        <Text fontSize={"18px"} color={"gray.500"}><IoMdThumbsUp /></Text>
                                        <Text fontWeight={"500"}>Recommended Searches</Text>
                                    </HStack>

                                    <Box display={"flex"} flexDir={"row"} flexWrap={"wrap"} justify={"flex-start"} align={"center"} mt={"10px"}>

                                        {
                                            Recommended?.map((el, i) => <Link key={i} to={el.path} >
                                                <RecommendedSearch title={el.title} />
                                            </Link>)
                                        }

                                    </Box>

                                </Box>

                            </Stack>

                            <Stack justify={"center"} align={"center"} w={"100%"} position={"absolute"} bottom={"0px"}>

                                <HStack  justify={"flex-start"} align={"center"} w={"100%"} mb={"20px"}  maxW={"1272px"}>
                                    <Box maxW={"140px"} ml={"4px"} borderRight={"1px solid #d8dce2"} pr={"20px"} mr={"10px"}>
                                        <Image src="/HomeImages/herebuy.png" alt="herebuy" />
                                    </Box>
                                    <Text fontSize={"13px"} color={"gray.500"}>Experience the world around you.</Text>
                                </HStack>

                            </Stack>

                        </Box>

                    </DrawerBody>

                </DrawerContent>
            </Drawer>
        </>
    )
}