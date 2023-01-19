import { Stack, Text, Box } from "@chakra-ui/react"

export const FooterBott = () => {
    return (
        <Box w={"100%"} bg={"#000"} color={"#c5c5c5"} fontWeight={"400"} fontSize={"12px"} p={{ base: "5px", sm: "5px", md: "0px", lg: "0px" }}>

            <Stack maxW={"1272px"} m={"auto"} p={"20px 10px"}>

                <Text>Copyright © nearbuy.com India Private Limited. All rights reserved.</Text>
                <Text>Version 3.0.0</Text>

            </Stack>

        </Box>
    )
}