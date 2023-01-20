import { Box, Button, Link } from '@chakra-ui/react'
import "./Product.css"
import { useDisclosure } from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,

} from '@chakra-ui/react'
function Dining() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return <Box >
        <Box className="nav_div">
            <nav className='location_params'>
                <Link>{'Near Buy >'}  </Link>
                <Link>{`eals In Delhi > `} </Link>
                <Link>{`DD>`} </Link>
                <Link> {`he BBQ Industry Jail Road Deals `} </Link>
                <hr className='card_divider'></hr>
            </nav>
        </Box>


        <Box className='resturant_card_section'>
            <Box className='res_txt'>
                <p className='service_type'>CASUAL DINING</p>
                <h1 className='Business_Name'>The BBQ Industry</h1>

                <Box className='address_details'>

                    <p className='road'>Jail Road </p>
                    <p className='km'>- 7.5 km away</p>
                    <p className='dir'>  <a href='inde'>Get Directions</a></p>

                </Box>

            </Box>
            <Box className='logo'>
                <img className='logo_IMG' src="https://img4.nbstatic.in/tr:w-500/61a9e8ef1e2731000b1bc7ca.jpg" alt="" />
            </Box>

            <Box className='po'>
                <Box className='res_txt_abs'>
                    <img className='logo_IMG' src='https://img4.nbstatic.in/tr:w-500/6341624c22b317000b87b1df.jpg' alt='' />
                    <div className="bottom-right" ><Button className='more_btn'>
                        More Image
                    </Button></div>

                </Box>
            </Box>
        </Box>

        <Box className='offer_section'>
            <Box className='offer_btn_section'>
                <Box className='li_box'>About</Box>
                <Box className='li_box'>Deals</Box>
                <Box className='li_box'>Photos</Box>
            </Box>
        </Box>
    </Box>

}


export { Dining }