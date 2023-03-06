import { Box } from "@chakra-ui/react"
import "./SalonServices.css"

// Salon service section on home page


export const SalonServices = () => {
    return (
        <Box className="salonServices">
            <Box className="salonServices1">
            <h1>Everthing Buffet!</h1>
            <img src="./HomeImages/SalonServices/scissorImage.png" alt="Error" />
            {/* <img src="./HomeImages/Buffet/salad.png" alt="Error" /> */}
            </Box>
            <Box className="salonServices2">
                <Box>
                    <img src="./HomeImages/SalonServices/salonServices-img1.png" alt="Error" />
                    <h1>Haircut</h1>
                    <p>166 Offers</p>
                </Box>
                <Box>
                    <img src="./HomeImages/SalonServices/salonServices-img2.png" alt="Error" />
                    <h1>Hair Spa</h1>
                    <p>103 Offers</p>
                </Box>
                <Box>
                    <img src="./HomeImages/SalonServices/salonServices-img3.png" alt="Error" />
                    <h1>Waxing</h1>
                    <p>107 Offers</p>
                </Box>
                <Box>
                    <img src="./HomeImages/SalonServices/salonServices-img4.png" alt="Error" />
                    <h1>Facial</h1>
                    <p>104 Offers</p>
                </Box>
                <Box>
                    <img src="./HomeImages/SalonServices/salonServices-img5.png" alt="Error" />
                    <h1>Hair Treatment</h1>
                    <p>105 Offers</p>
                </Box>
                <Box>
                    <img src="./HomeImages/SalonServices/salonServices-img6.png" alt="Error" />
                    <h1>All Salon Offers</h1>
                    <p>139 Offers</p>
                </Box>
            </Box>
        </Box>
    )
}