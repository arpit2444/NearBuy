import { Box } from "@chakra-ui/react"
import "./SalonServices.css"

// Massage section on home page


export const Massages = () => {
    return (
        <Box className="salonServices">
            <Box className="salonServices1">
            <h1>Relaxing Massages</h1>
            </Box>
            <Box className="salonServices2">
                <Box>
                    <img src="./HomeImages/Massage/massage-img1.png" alt="Error" />
                    <h1>Haircut</h1>
                    <p>166 Offers</p>
                </Box>
                <Box>
                    <img src="./HomeImages/Massage/massage-img2.png" alt="Error" />
                    <h1>Hair Spa</h1>
                    <p>103 Offers</p>
                </Box>
                <Box>
                    <img src="./HomeImages/Massage/massage-img3.png" alt="Error" />
                    <h1>Waxing</h1>
                    <p>107 Offers</p>
                </Box>
                <Box>
                    <img src="./HomeImages/Massage/massage-img4.png" alt="Error" />
                    <h1>Facial</h1>
                    <p>104 Offers</p>
                </Box>
                <Box>
                    <img src="./HomeImages/Massage/massage-img5.png" alt="Error" />
                    <h1>Hair Treatment</h1>
                    <p>105 Offers</p>
                </Box>
                <Box>
                    <img src="./HomeImages/Massage/massage-img6.png" alt="Error" />
                    <h1>All Salon Offers</h1>
                    <p>139 Offers</p>
                </Box>
            </Box>
        </Box>
    )
}