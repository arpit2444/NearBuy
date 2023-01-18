import React from "react";

import {
  Button,
  ButtonGroup,
  Checkbox,
  Container,
  FormControl,
  FormLabel,
  GridItem,
  Heading,
  HStack,
  Input,
  Select,
  SimpleGrid,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";

const CheckoutYourDetails = () => {
  return (
    <>
      <VStack w="full" h="full" p={10} spacing={10} align="flex-start">
        <VStack spacing={2} align="flex-start">
          <Heading>Your Details</Heading>
        </VStack>
        <SimpleGrid columns={2} columnGap={3} rowGap={4}>
          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input placeholder="Enter Name " />
            </FormControl>
          </GridItem>

          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel>Address</FormLabel>
              <Textarea placeholder="Enter Your Address... " />
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl>
              <FormLabel>City</FormLabel>
              <Input placeholder="Enter City " />
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl>
              <FormLabel>Country </FormLabel>
              <Select placeholder="Select Country">
                <option value="india">India</option>
              </Select>
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl>
              <Checkbox>Ship to the billing address.</Checkbox>
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <Button variant="primary" width="full" size="lg">
              Proceed to Payment
            </Button>
          </GridItem>
        </SimpleGrid>
      </VStack>
    </>
  );
};

export default CheckoutYourDetails;
