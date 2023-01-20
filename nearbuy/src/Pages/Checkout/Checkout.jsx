import { Stack } from "@chakra-ui/react";
import React from "react";
import CheckoutSummary from "../../Components/Checkout/CheckoutSummary";
import CheckoutYourDetails from "../../Components/Checkout/CheckoutYourDetails";

const Checkout = () => {
  return (
    <>
      <Stack direction={["column", "column", "row"]}>
        <CheckoutSummary />
        <CheckoutYourDetails />
      </Stack>
    </>
  );
};

export default Checkout;
