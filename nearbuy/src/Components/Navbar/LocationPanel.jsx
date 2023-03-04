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
  UnorderedList,
  AlertTitle,
  Tooltip,
} from "@chakra-ui/react";
import { IoLocationSharp } from "react-icons/io5";
import { BsBuilding } from "react-icons/bs";
import { RecommendedSearch } from "./RecommendedSearch";
import { RxCross1 } from "react-icons/rx";
import { FaLocationArrow } from "react-icons/fa";
import { TfiArrowCircleDown } from "react-icons/tfi";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useThrottle } from "./Hooks/useThrottle";
import { getData, saveData } from "./utils/accessLacalStorage";

const Recommended = [
  { name: "New Delhi", path: "" },
  { name: "Gurgaon", path: "" },
  { name: "Jaipur", path: "" },
  { name: "Bengaluru", path: "" },
  { name: "Mumbai", path: "" },
  { name: "Kolkata", path: "" },
  { name: "Hyderabad", path: "" },
  { name: "Chennai", path: "" },
  { name: "Chandigarh", path: "" },
  { name: "Pune", path: "" },
  { name: "Ahmedabad", path: "" },
  { name: "Goa", path: "" },
];

export const LocationPanel = ({ boolean = true }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const savedCity = getData("city");
  const [city, setCity] = useState(savedCity || "Use My Current Location");

  // Geo location
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const getCoordinates = async () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  };

  const getLocation = () => {
    const api_endpoint = `https://api.openweathermap.org/data/2.5/weather?`;
    const api_key = `ffd59a0590e28f3ddb262bfa988d132e`;

    axios
      .get(`${api_endpoint}lat=${latitude}&lon=${longitude}&appid=${api_key}`)
      .then((res) => {
        if (savedCity) {
          setCity(savedCity);
        } else {
          setCity(res.data.name);
        }
      })
      .catch((err) => console.log(err.message));
  };

  // Search functionalities

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleQuery = useCallback((query) => {
    if (query) {
      const url = `https://herebuy-database.vercel.app/cities?q=${query}`;
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

  let throttleValue = useThrottle(search, 2000);

  useEffect(() => {
    handleQuery(throttleValue);
    getCoordinates();
    getLocation();
  }, [throttleValue, latitude, longitude]);

  const handleCity = (value) => {
    setCity(value);
    setSearch("");
    saveData("city", value);
  };

  return (
    <>
      <HStack
        cursor={"pointer"}
        onClick={onOpen}
        justify={"center"}
        align={"center"}
        flexWrap={"wrap"}
      >
        <HStack m={"0px 5px"} fontWeight={"500"}>
          <IoLocationSharp />
          <Text>Select Location {!boolean && ":"}</Text>
          {!boolean && <Text>{city}</Text>}
          {!boolean && <TfiArrowCircleDown />}
        </HStack>

        {boolean && (
          <HStack
            bg={"whiteAlpha.700"}
            m={"0px 10px"}
            fontWeight={boolean ? "400" : "500"}
            border={boolean ? "1px solid gray" : "none"}
            borderRadius={"20px"}
            p={"3px 13px"}
          >
            <Text>{city}</Text>
            <TfiArrowCircleDown />
          </HStack>
        )}

        <Stack>
          {city !== "New Delhi" ? (
            <Tooltip
              label="Currently we have offers only for New Delhi."
              bg="red.400"
              color="white"
              aria-label="A tooltip"
            >
              <Text color={"orangered"} fontWeight={"800"}>
                ! Select New Delhi
              </Text>
            </Tooltip>
          ) : (
            ""
          )}
        </Stack>
      </HStack>

      <Drawer placement={"top"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <Box w={"100%"} minH={"65vh"} position={"relative"}>
              <Stack m={"auto"} maxW={"1272px"}>
                <VStack
                  color={"gray.500"}
                  p={"5px"}
                  position={"relative"}
                  m={"15px 0px"}
                >
                  <Text fontSize={"20px"} fontWeight={"500"} color={"black"}>
                    Pick a City
                  </Text>

                  {city !== "New Delhi" ? (
                    <>
                      <Text color={"orangered"}>
                        Please select New Delhi !{" "}
                      </Text>
                      <Text color={"orangered"}>
                        Currently we have offers only for New Delhi.
                      </Text>
                    </>
                  ) : (
                    <Text>To find awesome offers around you</Text>
                  )}
                  <VStack
                    justify={"center"}
                    align={"center"}
                    cursor={"pointer"}
                    onClick={onClose}
                    color={"gray.500"}
                    position={"absolute"}
                    top={"10px"}
                    right={"25px"}
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
                </VStack>

                <Box>
                  <HStack
                    color={"#ef6864"}
                    justify={"flex-start"}
                    align={"center"}
                    className={"LocationPanel"}
                  >
                    <HStack
                      justify={"space-between"}
                      align={"center"}
                      className="LocationBoxPanel"
                    >
                      <IoLocationSharp />
                      <input
                        value={search}
                        onChange={handleChange}
                        className="LocationInputPanel "
                        type={"text"}
                        placeholder={"Enter your city name"}
                      />
                    </HStack>
                    <HStack className="LocationButtonPanel">
                      <FaLocationArrow />
                      <UnorderedList
                        m={"0px"}
                        p={"0px"}
                        display={{
                          base: "none",
                          sm: "block",
                          md: "block",
                          lg: "block",
                        }}
                      >
                        <Text>{city}</Text>
                      </UnorderedList>
                    </HStack>
                  </HStack>
                </Box>

                <Box p={"20px 5px"}>
                  <HStack m={"auto"}>
                    <Text fontSize={"18px"} color={"gray.500"}>
                      <BsBuilding />
                    </Text>
                    <Text
                      cursor={"pointer"}
                      fontWeight={"500"}
                      onClick={() => setSuggestions([])}
                    >
                      Top Cities
                    </Text>
                  </HStack>

                  <Box
                    display={"flex"}
                    flexDir={"row"}
                    flexWrap={"wrap"}
                    justifyContent={{
                      base: "space-between",
                      sm: "flex-start",
                      md: "flex-start",
                      lg: "flex-start",
                    }}
                    alignItems={"center"}
                    mt={"10px"}
                  >
                    {suggestions &&
                      suggestions
                        ?.filter((e, i) => i <= 20)
                        .map((el) => (
                          <Box onClick={onClose} key={el.id}>
                            <RecommendedSearch
                              title={el.name}
                              handleOnClick={() => handleCity(el.name)}
                            />{" "}
                          </Box>
                        ))}

                    {suggestions.length === 0 &&
                      Recommended?.map((el, i) => (
                        <Box onClick={onClose} key={i + el.path}>
                          <RecommendedSearch
                            title={el.name}
                            handleOnClick={() => handleCity(el.name)}
                          />{" "}
                        </Box>
                      ))}
                  </Box>
                </Box>
              </Stack>

              <Stack
                justify={"center"}
                align={"center"}
                m={"auto"}
                w={"100%"}
                position={"absolute"}
                bottom={"0px"}
              >
                <HStack
                  justify={"center"}
                  align={"center"}
                  m={"auto"}
                  w={"100%"}
                  mb={"20px"}
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
