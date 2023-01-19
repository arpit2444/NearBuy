import { Box, Grid, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react"

export const FooterMid = () => {
    return (
        <Box w={"100%"} bg={"#000"} color={"#c5c5c5"} fontWeight={"400"} fontSize={"12px"} p={{ base: "5px", sm: "5px", md: "0px", lg: "0px" }}>

            <Grid maxW={"1272px"} templateColumns={{ base: "repeat(1, 1fr)", sm: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(2, 1fr)" }} m={"auto"} p={"30px 10px 10px"}>

                <Grid w={"100%"} templateColumns={{ base: "repeat(1, 1fr)", sm: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(2, 1fr)" }}>

                    <Stack justify={"flex-start"} align={"flex-start"}>
                        <Stack>
                            <Text cursor={"pointer"} fontWeight={"500"} fontSize={"14px"}>Company</Text>
                            <Text cursor={"pointer"}>About Us</Text>
                            <Text cursor={"pointer"}>Blog</Text>
                            <Text cursor={"pointer"}>Policy</Text>
                            <Text cursor={"pointer"}>Universal Fine Print</Text>
                        </Stack>
                    </Stack>

                    <Stack justify={"flex-start"} align={{ base: "flex-start", sm: "flex-start", md: "center", lg: "center" }} mt={{ base: "10px", sm: "10px", md: "0px", lg: "0px" }}>
                        <Stack>
                            <Text cursor={"pointer"} fontWeight={"500"} fontSize={"14px"}>Help</Text>
                            <Text cursor={"pointer"}>Contact Us</Text>
                            <Text cursor={"pointer"}>Sitemap</Text>
                        </Stack>
                    </Stack>

                </Grid>

                <Stack w={"100%"} justify={"flex-start"} align={{ base: "flex-start", sm: "flex-start", md: "center", lg: "center" }} mt={{ base: "15px", sm: "15px", md: "0px", lg: "0px" }}>
                    <Stack>
                        <Text fontWeight={"500"} fontSize={"14px"} mb={"5px"}>Download app</Text>

                        <HStack w={"100%"} pb={"10px"}>

                            <VStack cursor={"pointer"}>
                                <Image w={"120px"} src="/HomeImages/google-play-badge.svg" alt="google_play_store" />
                                <Text>Google Play</Text>
                            </VStack>

                            <VStack cursor={"pointer"}>
                                <Image w={"120px"} src="/HomeImages/app-store.svg" alt="Apple_Store" />
                                <Text>Apple Store</Text>
                            </VStack>

                        </HStack>

                        <Text>Customer Care: +91-7303390416 - 11 AM to 8 PM (MON - SUN)</Text>

                    </Stack>

                </Stack>

            </Grid>

        </Box>
    )
}