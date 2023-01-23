import { Box } from "@chakra-ui/react"
import "./Buffet.css"
import {Link} from "react-router-dom"

export const Buffet = () => {
    return (
        <Box className="buffet">
            <Box className="buffet1">
            <h1>Everthing Buffet!</h1>
            <img src="./HomeImages/Buffet/bibimbap.png" alt="Error" />
            <img src="./HomeImages/Buffet/salad.png" alt="Error" />
            </Box>
            <Box className="buffet2">
                <Box>
                    <img src="./HomeImages/Buffet/buffet-img1.png" alt="Error" />
                </Box>
                <Box>
                    <img src="./HomeImages/Buffet/buffet-img2.png" alt="Error" />
                </Box>
                <Box>
                    <img src="./HomeImages/Buffet/buffet-img3.png" alt="Error" />
                </Box>
            <Link to="/product">    <Box>
                    <img src="./HomeImages/Buffet/buffet-img4.png" alt="Error" />
                </Box></Link>
            </Box>
        </Box>
    )
}
