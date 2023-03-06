import { Box, HStack, Image, Text, UnorderedList } from "@chakra-ui/react";
import { IoMdLock } from "react-icons/io";
import "./Navbar.css";
import { SearchPanel } from "./SearchPanel";
import { LocationPanel } from "./LocationPanel";
import { Authentication } from "../Authentication/Authentication";
import { Link } from "react-router-dom";
import { AuthDropDown } from "../Authentication/AuthDropDown";
import { useContext } from "react";
import { userAuthContext } from "../Context/UserAuthContext";
import { Sidebar } from "./Sidebar";

// this function returns whole navbar containting different different components.
export const Navbar = () => {
  // this useContext is used for shareing user details that user having login or not by this we can show the profile components in the navbar.
  const { user } = useContext(userAuthContext);

  return (
    <Box zIndex={100} w={"100%"} position={"sticky"} top={"0"} bg={"white"}>
      <Box w={"100%"} fontSize={"12px"} bg={"#f1f1f1"}>
        <HStack
          m={"auto"}
          maxW={"1272px"}
          justify={"space-between"}
          align={"center"}
          color={"gray.500"}
          p={"5px"}
        >
          <LocationPanel />

          <UnorderedList
            m={"0px"}
            p={"0px"}
            display={{ base: "none", sm: "none", md: "block", lg: "block" }}
          >
            <HStack fontWeight={"500"} position={"relative"}>
              <Text cursor={"pointer"} color={"#ef6864"}>
                We're hiring!
              </Text>
              <Text position={"relative"} top={"-1px"}>
                |
              </Text>
              <Text cursor={"pointer"}>How it Works</Text>
              <Text position={"relative"} top={"-1px"}>
                |
              </Text>
              <Text cursor={"pointer"}>List your Business</Text>
              <Text position={"relative"} top={"-1px"}>
                |
              </Text>
              {!user?.accessToken ? <Authentication /> : <AuthDropDown />}
            </HStack>
          </UnorderedList>
        </HStack>
      </Box>

      <Box w={"100%"} bg={"white"}>
        <HStack
          m={"auto"}
          maxW={"1272px"}
          justify={"space-between"}
          align={"center"}
          p={"5px"}
        >
          <Link to={"/"}>
            <Box maxW={"140px"} ml={"4px"}>
              <Image src="/HomeImages/herebuy.png" alt="herebuy" />
            </Box>
          </Link>

          <UnorderedList
            m={"0px"}
            p={"0px"}
            display={{ base: "none", sm: "none", md: "block", lg: "block" }}
          >
            <SearchPanel />
          </UnorderedList>

          <UnorderedList
            m={"0px"}
            p={"0px"}
            display={{ base: "block", sm: "block", md: "none", lg: "none" }}
          >
            <Sidebar />
          </UnorderedList>
        </HStack>

        <hr></hr>
      </Box>
    </Box>
  );
};
