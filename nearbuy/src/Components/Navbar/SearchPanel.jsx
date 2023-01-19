import { Drawer, DrawerBody, DrawerOverlay, DrawerContent, HStack, useDisclosure, Box, VStack, Text, Stack } from '@chakra-ui/react'
import { HiOutlineSearch } from 'react-icons/hi'
import { RxCross1 } from 'react-icons/rx'
import { IoLocationSharp } from 'react-icons/io5'
import { IoMdThumbsUp } from 'react-icons/io'

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

                        <Box w={"100%"} h={"97vh"}>

                            <Stack m={"auto"} maxW={"1272px"}>

                                <HStack justify={"space-between"} align={"center"} color={"gray.500"} p={"5px"} position={"relative"} m={"15px 0px"}>

                                    <HStack fontWeight={"500"}>
                                        <IoLocationSharp />
                                        <Text>Select Location</Text>
                                    </HStack>

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

                                </Box>

                            </Stack>

                        </Box>

                    </DrawerBody>

                </DrawerContent>
            </Drawer>
        </>
    )
}