import { HStack, Stack, Text, Box, Grid } from "@chakra-ui/react";
import { FaTwitter } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";

// this function returns top section of footer.
export const FooterTop = () => {
  return (
    <Box
      w={"100%"}
      bg={"#333"}
      color={"#c5c5c5"}
      p={{ base: "5px", sm: "5px", md: "0px", lg: "0px" }}
    >
      <Grid
        maxW={"1272px"}
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(1, 1fr)",
          md: "repeat(2, 80% 20%)",
          lg: "repeat(2, 80% 20%)",
        }}
        m={"auto"}
        p={"30px 10px"}
      >
        <Stack>
          <Text fontWeight={"500"} fontSize={"13px"}>
            Amazing offers available on herebuy
          </Text>
          <Text fontSize={"11px"}>
            nearbuy helps you discover the best things to do, eat and buy –
            wherever you are! Make every day awesome with nearbuy. Dine at the
            finest restaurants, relax at the best spas, pamper yourself with
            exciting wellness and shopping offers or just explore your city
            intimately… you will always find a lot more to do with nearbuy. From
            tattoo parlors to music concerts, movie tickets to theme parks,
            everything you want is now within reach. Don't stop yet! Take it
            wherever you go with the nearbuy mobile app. Based on your location
            and preference, our smart search engine will suggest new things to
            explore every time you open the app. What's more, with offers on
            everything around you... you are sure to try something new every
            time.
          </Text>
        </Stack>

        <Stack
          justify={"flex-start"}
          align={{
            base: "flex-start",
            sm: "flex-start",
            md: "center",
            lg: "center",
          }}
          mt={"20px"}
        >
          <Stack justify={"center"} align={"flex-Start"} textAlign={"left"}>
            <Text fontWeight={"500"}>Follow Us</Text>
            <HStack color={"#333"}>
              <Text
                cursor={"pointer"}
                bg={"#c5c5c5"}
                borderRadius={"50%"}
                p={"5px"}
              >
                <ImFacebook />
              </Text>
              <Text
                cursor={"pointer"}
                bg={"#c5c5c5"}
                borderRadius={"50%"}
                p={"5px"}
              >
                <FaTwitter />
              </Text>
              <Text
                cursor={"pointer"}
                bg={"#c5c5c5"}
                borderRadius={"50%"}
                p={"5px"}
              >
                <AiFillInstagram />
              </Text>
            </HStack>
          </Stack>
        </Stack>
      </Grid>
    </Box>
  );
};
