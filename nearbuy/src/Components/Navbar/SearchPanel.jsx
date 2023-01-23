import { Drawer, DrawerBody, DrawerOverlay, DrawerContent, HStack, useDisclosure, Box, VStack, Text, Stack, Image } from '@chakra-ui/react'
import { HiOutlineSearch } from 'react-icons/hi'
import { RxCross1 } from 'react-icons/rx'
import { IoLocationSharp } from 'react-icons/io5'
import { IoMdThumbsUp } from 'react-icons/io'
import { RecommendedSearch } from './RecommendedSearch'
import { Link } from 'react-router-dom'
import { LocationPanel } from './LocationPanel'
import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import { useThrottle } from './Hooks/useThrottle'
import { getData } from './utils/accessLacalStorage'

export const SearchPanel = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const [search, setSearch] = useState("")
    const [suggestions, setSuggestions] = useState([])
    const [recommended, setRecommended] = useState([])
    const city = getData("city")


    const getRecommended = useCallback((query) => {
        const url = `https://herebuy-database.vercel.app/data`
        axios.get(url)
            .then((res) => {
                setRecommended(res.data)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }, [])

    // Search functionalities

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const handleQuery = useCallback((query) => {
        if (query) {
            const url = `https://herebuy-database.vercel.app/data?q=${query}`
            axios.get(url)
                .then((res) => {
                    setSuggestions(res.data)
                })
                .catch((err) => {
                    console.log(err.message)
                })
        } else {
            setSuggestions([])
        }
    }, [])

    let throttleValue = useThrottle(search, 2000)

    useEffect(() => {
        getRecommended()
        handleQuery(throttleValue)
    }, [throttleValue])


    const handleService = () => {
        setSearch("");
    }

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
                                            <input value={search} onChange={handleChange} className="searchInputPanel " type={"text"} placeholder={"Search restaurants, spa, events, things to do..."} />
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
                                            suggestions && (
                                                suggestions?.filter((e, i) => i <= 20).map((el) => <Link onClick={onClose} key={el.id} to={`${city}/${el.path}`} >
                                                    <RecommendedSearch handleOnClick={handleService} title={el.title} />
                                                </Link>)
                                            )

                                        }


                                        {
                                            suggestions.length === 0 && recommended?.filter((e, i) => i <= 10).map((el) => <Link onClick={onClose} key={el.id} to={`${city}/${el.path}`} >
                                                <RecommendedSearch handleOnClick={handleService} title={el.title} />
                                            </Link>)
                                        }

                                    </Box>

                                </Box>

                            </Stack>

                            <Stack justify={"center"} align={"center"} w={"100%"} position={"absolute"} bottom={"0px"}>

                                <HStack justify={"flex-start"} align={"center"} w={"100%"} mb={"20px"} maxW={"1272px"}>
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
