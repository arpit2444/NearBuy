import { Box } from "@chakra-ui/react"
import { FooterBott } from "../../Components/Footer/FooterBott"
import { FooterMid } from "../../Components/Footer/FooterMid"
import { FooterTop } from "../../Components/Footer/FooterTop"

export const Home = () => {
    return (
        <>

            {/* Add home page layouts in the below Box */}
            <Box></Box>

            {/* Below Box is for Footer*/}

            <Box w={"100%"} mt={"50px"}>

                <FooterTop/>

                <FooterMid/>

                <FooterBott/>

            </Box>
        </>
    )
}