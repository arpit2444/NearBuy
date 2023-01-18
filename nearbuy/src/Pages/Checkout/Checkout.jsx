import { Container, Flex, HStack, Stack, VStack } from "@chakra-ui/react";
import React from "react";
import CheckoutSummary from "../../Components/Checkout/CheckoutSummary";
import CheckoutYourDetails from "../../Components/Checkout/CheckoutYourDetails";

const Checkout = () => {
  return (
    <>
      <HStack>
        <VStack>
          <CheckoutSummary />
        </VStack>
        <VStack>
          <CheckoutYourDetails />
        </VStack>
      </HStack>
    </>
  );
};

export default Checkout;
