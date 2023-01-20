import { Box, Text } from "@chakra-ui/layout"

export const RecommendedSearch = ({title, handleCity}) => {
    return(
        <Box onClick={handleCity} border={"1px solid #d8dce2"} borderRadius={"25px"} p={"8px 20px"} m={"10px 10px 10px 0px"} cursor={"pointer"} color={"gray.500"} _hover={{border:"1px solid #ef6864", color:"#ef6864"}} transition={"0.3s"}>

            <Text fontSize={"13px"}>{title}</Text>

        </Box>
    )
}