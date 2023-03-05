import {
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  HStack,
  Text,
  VStack,
  Stack,
  Box,
  Grid,
  Image,
  UnorderedList,
  useToast,
} from "@chakra-ui/react";
import { useContext, useRef, useState } from "react";
import { IoMdLock } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { userAuthContext } from "../Context/UserAuthContext";
import "./Authentication.css";

// this function returns a modal for login and authentication.
export const Authentication = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const { setUpRecaptcha, user } = useContext(userAuthContext);
  const [confirmObj, setConfirmObj] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [number, setNumber] = useState("");
  const [otp, setOtp] = useState("");

  const toast = useToast();

  // this function is for validate user with phone number and google capcha and it will give a toast pop up meassage according to success or error.
  const handleSendOtp = async () => {
    if (number === "" || number === undefined) {
      toast({
        position: "top",
        description: "Please enter a valid Phone Number.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } else {
      try {
        const res = await setUpRecaptcha(number);
        setConfirmObj(res);
        setShowOTP(!showOTP);
        if (res.data) {
          console.log(res);
          toast({
            position: "top",
            title: "Account created.",
            description: "OTP send Successfully.",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
        }
      } catch (err) {
        toast({
          position: "top",
          description: err.message,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        console.log(err.message);
      }
    }
  };

  // this function is for otp authentication and it will give a toast pop up meassage according to success or error.
  const handleVerifyOtp = async () => {
    if (otp === "" || otp === null) {
      toast({
        position: "top",
        description: "Please enter your OTP!",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    } else {
      try {
        const res = await confirmObj.confirm(otp);
        console.log(res);
        if (res._tokenResponse) {
          onClose();
          toast({
            position: "top",
            title: "Account created.",
            description: "Sign In Successfully.",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
        }
      } catch (err) {
        toast({
          position: "top",
          description: err.message,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        console.log(err.message);
      }
    }
  };

  return (
    <>
      <HStack
        onClick={onOpen}
        cursor={"pointer"}
        justify={"center"}
        align={"center"}
      >
        <Text>
          <IoMdLock />
        </Text>
        <Text>Login / Sign Up</Text>
      </HStack>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent borderRadius={"5px"}>
          <Grid
            p={"0px"}
            borderRadius={"5px"}
            overflow={"hidden"}
            minH={"450px"}
            templateColumns={{
              base: "repeat(2, 10% 90%)",
              sm: "repeat(2, 10% 90%)",
              md: "repeat(2, 28% 72%)",
              lg: "repeat(2, 28% 72%)",
            }}
          >
            <Stack
              justify={"Center"}
              align={"center"}
              h={"100%"}
              bg={"#ef534e"}
            >
              <UnorderedList
                m={"0px"}
                p={"0px"}
                display={{ base: "none", sm: "none", md: "block", lg: "block" }}
              >
                <VStack color={"white"} position={"relative"}>
                  <Text
                    letterSpacing={"2px"}
                    fontSize={"22px"}
                    fontWeight={"bolder"}
                  >
                    herebuy
                  </Text>
                  <Text
                    letterSpacing={"2px"}
                    position={"absolute"}
                    top={"17px"}
                    left={"2px"}
                    fontSize={"6px"}
                    fontWeight={"300"}
                  >
                    THE LIFESTYLE APP
                  </Text>
                  <Text
                    position={"relative"}
                    top={"-5px"}
                    w={"100px"}
                    letterSpacing={"1px"}
                    fontWeight={"350"}
                    fontSize={"8px"}
                  >
                    Explore exciting deals & offers around you
                  </Text>
                </VStack>
              </UnorderedList>
            </Stack>

            {!showOTP ? (
              <Box w={"100%"} h={"100%"}>
                <HStack
                  justify={"flex-end"}
                  align={"center"}
                  w={"100%"}
                  p={"15px 16px"}
                >
                  <Text cursor={"pointer"} onClick={onClose}>
                    <RxCross1 />
                  </Text>
                </HStack>
                <Text ml={"10px"} fontSize={"20px"} fontWeight={"500"}>
                  Login / Sign up
                </Text>
                <div className="form__div">
                  <input
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    type="number"
                    className="form__input"
                    placeholder=" "
                  />
                  <label for="" className="form__label">
                    Mobile Number
                  </label>
                </div>

                <Box
                  id="recaptcha-container"
                  p={"10px"}
                  cursor={"pointer"}
                  m={"auto"}
                  w={"100%"}
                  position={"relative"}
                  top={"60px"}
                ></Box>

                <button onClick={handleSendOtp} className="signin">
                  NEXT
                </button>
              </Box>
            ) : (
              <Box w={"100%"} h={"100%"}>
                <HStack
                  justify={"flex-end"}
                  align={"center"}
                  w={"100%"}
                  p={"15px 16px"}
                >
                  <Text cursor={"pointer"} onClick={onClose}>
                    <RxCross1 />
                  </Text>
                </HStack>
                <Text ml={"10px"} fontSize={"13px"} fontWeight={"500"}>
                  OTP sent to you on your mobile phone
                </Text>
                <div className="form__div">
                  <input
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    type="number"
                    className="form__input"
                    placeholder=" "
                  />
                  <label for="" className="form__label">
                    OTP
                  </label>
                </div>

                <button onClick={() => setShowOTP(false)} className="backBtn">
                  BACK
                </button>
                <button onClick={handleVerifyOtp} className="signin">
                  VERIFY
                </button>
              </Box>
            )}
          </Grid>
        </ModalContent>
      </Modal>
    </>
  );
};
