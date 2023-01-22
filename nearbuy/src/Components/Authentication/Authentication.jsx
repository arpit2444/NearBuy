import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Button, FormControl, FormLabel, Input, HStack, Text, VStack, Stack, Box, Grid, Image, UnorderedList, PinInput, PinInputField, } from '@chakra-ui/react'
import { useContext, useRef, useState } from 'react'
import { IoMdLock } from 'react-icons/io'
import { RxCross1 } from 'react-icons/rx'
import { useNavigate } from 'react-router-dom'
// import { userAuthContext } from '../Context/UserAuthContext'
import './Authentication.css'

export const Authentication = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [showOTP, setShowOTP] = useState(false)
    const [otp, setOtp] = useState("")
    const initialRef = useRef(null)
    const finalRef = useRef(null)


    const [number, setNumber] = useState("")
    const [error, setError] = useState("")
    // const { setUpRecaptcha } = useContext(userAuthContext)
    const [confirmObj, setConfirmObj] = useState("");
    const navigate = useNavigate()

    const handleSendOtp = async () => {
        setError("")
        // if (number === "" || number === undefined) {
        //     return setError("Please enter a valid Phone Number");
        // } else {
        //     try {
        //         const res = await setUpRecaptcha(number)
        //         setConfirmObj(res)
        //         setShowOTP(true)
        //         console.log(res)
        //     } catch (err) {
        //         console.log(err.message)
        //     }
        // }
    }

    const handleVerifyOtp = async () => {
        setError("")
        // if (otp === "" || otp === null) {
        //     return;
        // } else {
        //     try {
        //         const res = await confirmObj.confirm(otp)
        //         navigate("/")
        //     } catch (err) {
        //         console.log(err.message)
        //     }
        // }
    }

    return (
        <>
            <HStack onClick={onOpen} cursor={"pointer"} justify={"center"} align={"center"}>
                <Text><IoMdLock /></Text>
                <Text>Login / Sign Up</Text>
            </HStack>

            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent borderRadius={"5px"} w={"500px"}>

                    <Grid p={"0px"} borderRadius={"5px"} overflow={"hidden"} minH={"450px"} templateColumns={{ base: "repeat(2, 10% 90%)", sm: "repeat(2, 10% 90%)", md: "repeat(2, 30% 70%)", lg: "repeat(2, 30% 70%)" }}>

                        <Stack justify={"Center"} align={"center"} h={"100%"} bg={"#ef534e"}>
                            <UnorderedList m={"0px"} p={"0px"} display={{ base: "none", sm: "none", md: "block", lg: "block" }}>
                                <VStack color={"white"} position={"relative"}>
                                    <Text letterSpacing={"2px"} fontSize={"22px"} fontWeight={"bolder"}>herebuy</Text>
                                    <Text letterSpacing={"2px"} position={"absolute"} top={"17px"} left={"2px"} fontSize={"6px"} fontWeight={"300"}>THE LIFESTYLE APP</Text>
                                    <Text position={"relative"} top={"-5px"} w={"100px"} letterSpacing={"1px"} fontWeight={"350"} fontSize={"8px"}>Explore exciting deals & offers around you</Text>
                                </VStack>
                            </UnorderedList>

                        </Stack>

                        {!showOTP ?
                            (<Box w={"100%"} h={"100%"}>
                                <HStack justify={"flex-end"} align={"center"} w={"100%"} p={"15px 16px"}>
                                    <Text cursor={"pointer"} onClick={onClose}><RxCross1 /></Text>
                                </HStack>
                                <Text ml={"20px"} fontSize={"20px"} fontWeight={"500"}>Login / Sign up</Text>
                                <div className="form__div">
                                    <input type="number" className="form__input" placeholder=" " />
                                    <label for="" className="form__label">
                                        Mobile Number</label>
                                </div>

                                <Box id='recaptcha-container' cursor={"pointer"} m={"auto"} w={"90%"} position={"relative"} top={"60px"}>
                                    {/* <Image src="/HomeImages/recaptcha.png" alt="recaptcha" /> */}
                                </Box>

                                <button onClick={handleSendOtp} className="signin">NEXT</button>
                            </Box>) :

                            (<Box w={"100%"} h={"100%"}>
                            <HStack justify={"flex-end"} align={"center"} w={"100%"} p={"15px 16px"}>
                                <Text cursor={"pointer"} onClick={onClose}><RxCross1 /></Text>
                            </HStack>
                            <Text ml={"20px"} fontSize={"13px"} fontWeight={"500"}>OTP sent to you on your mobile phone</Text>
                            <div className="form__div">
                                <input type="number" className="form__input" placeholder=" " />
                                <label for="" className="form__label">OTP</label>
                            </div>

                            <button onClick={() => setShowOTP(false)} className="backBtn">BACK</button>
                            <button onClick={handleVerifyOtp} className="signin">VERIFY</button>
                        </Box>)
                        }

                    </Grid>

                </ModalContent>
            </Modal>
        </>
    )
}