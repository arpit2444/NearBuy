import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  HStack,
  useDisclosure,
  Box,
  VStack,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";
import { HiOutlineSearch } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdThumbsUp } from "react-icons/io";
import { RecommendedSearch } from "./RecommendedSearch";
import { Link } from "react-router-dom";
import { LocationPanel } from "./LocationPanel";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useThrottle } from "./Hooks/useThrottle";
import { getData } from "./utils/accessLacalStorage";

// this function returns search panel in the navbar section.
export const SearchPanel = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const city = getData("city");

  //this function is used for fetching  recommended data from our api.
  const getRecommended = useCallback((query) => {
    const url = `https://herebuy-database.vercel.app/newDelhi`;
    axios
      .get(url)
      .then((res) => {
        setRecommended(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  // geting input data for Search functionalities
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  // this is a function for searching different differemt location in new delhi from our api
  const handleQuery = useCallback((query) => {
    if (query) {
      const url = `https://herebuy-database.vercel.app/newDelhi?q=${query}`;
      axios
        .get(url)
        .then((res) => {
          setSuggestions(res.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    } else {
      setSuggestions([]);
    }
  }, []);

  // here i have used useThrottle hook for limiting the api request.
  let throttleValue = useThrottle(search, 2000);

  // here in the useEffect all the functions above like getRecommended(), handleQuery(throttleValue) are called.
  useEffect(() => {
    getRecommended();
    handleQuery(throttleValue);
  }, [throttleValue]);

  // in this function i have used  to save data in the ui.
  const handleService = () => {
    setSearch("");
  };

  return (
    <>
      <HStack
        onClick={onOpen}
        color={"#ef6864"}
        justify={"center"}
        align={"center"}
        // className={"searchBox"}
      >
        <HStack justify={"space-between"} align={"center"} className="inputBox">
          <HiOutlineSearch />
          <input
            disabled
            className="searchInput"
            type={"text"}
            placeholder={"Search restaurants, spa, events by location."}
          />
        </HStack>
        <button className="searchButton">SEARCH</button>
      </HStack>

      <Drawer placement={"top"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <Box w={"100%"} h={"97vh"} position={"relative"}>
              <Stack m={"auto"} maxW={"1272px"}>
                <HStack
                  justify={"space-between"}
                  align={"center"}
                  color={"gray.500"}
                  p={"5px"}
                  position={"relative"}
                  m={"15px 0px"}
                >
                  <LocationPanel boolean={false} />

                  <VStack
                    justify={"center"}
                    align={"center"}
                    cursor={"pointer"}
                    onClick={onClose}
                    position={"relative"}
                    top={"5px"}
                  >
                    <RxCross1 />
                    <Text
                      fontSize={"12px"}
                      position={"relative"}
                      top={"-10px"}
                      m={"0px"}
                    >
                      ESC
                    </Text>
                  </VStack>
                </HStack>

                <Box>
                  <HStack
                    onClick={onOpen}
                    color={"#ef6864"}
                    justify={"flex-start"}
                    align={"center"}
                    className={"searchPanel"}
                  >
                    <HStack
                      justify={"space-between"}
                      align={"center"}
                      className="inputBoxPanel"
                    >
                      <HiOutlineSearch />
                      <input
                        value={search}
                        onChange={handleChange}
                        className="searchInputPanel "
                        type={"text"}
                        placeholder={
                          "Search restaurants, spa, events, things to do by location."
                        }
                      />
                    </HStack>
                    <button className="searchButtonPanel">SEARCH</button>
                  </HStack>
                </Box>

                <Box p={"20px 5px"}>
                  <HStack>
                    <Text fontSize={"18px"} color={"gray.500"}>
                      <IoMdThumbsUp />
                    </Text>
                    <Text fontWeight={"500"}>Recommended Searches</Text>
                  </HStack>

                  <Box
                    display={"flex"}
                    flexDir={"row"}
                    flexWrap={"wrap"}
                    justify={"flex-start"}
                    align={"center"}
                    mt={"10px"}
                  >
                    {suggestions &&
                      suggestions
                        ?.filter((e, i) => i <= 20)
                        .map((el) => (
                          <Link
                            onClick={onClose}
                            key={el.id}
                            to={`/product?address=${el.value}`}
                          >
                            <RecommendedSearch
                              handleOnClick={handleService}
                              title={el.name}
                            />
                          </Link>
                        ))}

                    {suggestions.length === 0 &&
                      recommended
                        ?.filter((e, i) => i <= 10)
                        .map((el) => (
                          <Link
                            onClick={onClose}
                            key={el.id}
                            to={`/product?address=${el.value}`}
                          >
                            <RecommendedSearch
                              handleOnClick={handleService}
                              title={el.name}
                            />
                          </Link>
                        ))}
                  </Box>
                </Box>
              </Stack>

              <Stack
                justify={"center"}
                align={"center"}
                w={"100%"}
                position={"absolute"}
                bottom={"0px"}
              >
                <HStack
                  justify={"flex-start"}
                  align={"center"}
                  w={"100%"}
                  mb={"20px"}
                  maxW={"1272px"}
                >
                  <Box
                    maxW={"140px"}
                    ml={"4px"}
                    borderRight={"1px solid #d8dce2"}
                    pr={"20px"}
                    mr={"10px"}
                  >
                    <Image src="/HomeImages/herebuy.png" alt="herebuy" />
                  </Box>
                  <Text fontSize={"13px"} color={"gray.500"}>
                    Experience the world around you.
                  </Text>
                </HStack>
              </Stack>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
