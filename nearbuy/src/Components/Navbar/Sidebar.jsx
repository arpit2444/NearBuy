import { RxHamburgerMenu } from "react-icons/rx";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Text,
  Spacer,
  Stack,
  useToast,
  UnorderedList,
} from "@chakra-ui/react";
import { useRef } from "react";
import { SearchPanel } from "./SearchPanel";
import { useContext } from "react";
import { userAuthContext } from "../Context/UserAuthContext";
import { FaUserCircle } from "react-icons/fa";
import { Authentication } from "../Authentication/Authentication";
import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const { user, SignOut } = useContext(userAuthContext);
  const navigate = useNavigate();
  const toast = useToast();

  const handleLogOut = () => {
    SignOut()
      .then((res) => {
        navigate("/");
        toast({
          position: "top",
          title: "Account created.",
          description: "Sign Out Successfully.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      <Button
        ref={btnRef}
        bg={"#ef534e"}
        color={"white"}
        onClick={onOpen}
        mr={"10px"}
        _hover={{ color: "white" }}
        _active={{
          color: "#ef534e",
          backgroundColor: "white",
          border: "1px solid #ef534e",
        }}
      >
        <RxHamburgerMenu />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="top"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <UnorderedList
            display={{
              base: "none",
              sm: "none",
              md: "block",
              lg: "block",
            }}
          >
            <DrawerCloseButton />
          </UnorderedList>

          <DrawerBody
            fontSize={"14px"}
            fontWeight={"500"}
            w={"100%"}
            mb={"20px"}
          >
            <SearchPanel />

            {!user ? (
              <Stack mt={"30px"}>
                <Authentication />
                <Text cursor={"pointer"} color={"#ef6864"}>
                  2. We're hiring!
                </Text>
                <Text cursor={"pointer"}>3. How it Works</Text>
                <Text cursor={"pointer"}>4. List your Business</Text>
              </Stack>
            ) : (
              <Stack mt={"30px"}>
                <Button
                  bg={"none"}
                  _hover={{ bg: "none" }}
                  _active={{ bg: "none" }}
                  fontWeight={"500"}
                  fontSize={"11px"}
                  as={Button}
                  rightIcon={<FaUserCircle />}
                >
                  My Account
                </Button>
                <Text cursor={"pointer"}>{user?.phoneNumber}</Text>
                <Text cursor={"pointer"}>My Orders</Text>
                <Text cursor={"pointer"}>My Credits</Text>
                <Text cursor={"pointer"}>My Profile</Text>
                <Text cursor={"pointer"}>My Newsletters</Text>
                <Text cursor={"pointer"}>Refer a friend</Text>
                <Text cursor={"pointer"}>My Promos</Text>
                <Text cursor={"pointer"} onClick={handleLogOut}>
                  Sign Out
                </Text>
              </Stack>
            )}
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
