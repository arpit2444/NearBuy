import {
  Box,
  Divider,
  Heading,
  HStack,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

import React from "react";

const CheckoutSummary = () => {
  return (
    <>
      <Stack w="full" h="full" p={10} spacing={3} align="flex-start">
        <Heading>Order Summary</Heading>
        <Divider />
        {/* Mapping on Hstack */}
        <HStack maxW={"100%"}>
          <VStack maxW={"100%"}>
            <Image
              src="https://img4.nbstatic.in/tr:w-350/610b705d1e2731000cfbbaf0.jpg"
              width={"45%"}
            />
          </VStack>
          <VStack maxW={"100%"} align="flex-start">
            <HStack>
              <Text>Pirates of Grill</Text>
            </HStack>
            <HStack>
              <Text>Vasant Kunj Sector C, New Delhi</Text>
            </HStack>
          </VStack>
        </HStack>
        <Divider />

        <HStack>
          <Text m={1}>
            Unlimited BBQ Lunch Buffet (Veg/Non-Veg) with 2 Mocktails or Aerated
            Beverage
          </Text>
        </HStack>
        <HStack>
          <VStack align={"flex-end"}>
            <Text>Qty: 1</Text>
          </VStack>
          <VStack align={"flex-end"}>
            <Text>Price Rs. {`899`}</Text>
          </VStack>
        </HStack>
        <Divider />
        <HStack>
          <Text>Apply Promo Code (if any)</Text>
          <Input></Input>
        </HStack>
        <HStack>
          <Text>Total 899</Text>
        </HStack>
        <Text></Text>
      </Stack>
    </>
  );
};

export default CheckoutSummary;
