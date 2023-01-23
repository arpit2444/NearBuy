import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  Heading,
  HStack,
  Img,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

export default function SingleProduct() {
  const [ddata, setDdata] = useState({});
  const [count, setCount] = useState(1);
  const navigate = useNavigate();

  const getProduct = () => {
    axios.get(`https://herebuy-database-jj32uwrxx-kashif-rezwi.vercel.app/Barbeque?id=${id}`).then((res) => {
      setDdata(res.data[0]);
    });
  };

  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    getProduct();
  }, [count]);
  return (
    <div>
      <Stack mt={"-5"}>
        <HStack>
          <VStack w={"full"} ml={"-40"}>
            <Heading>{ddata.title}</Heading>
            <Text fontSize="xl">{ddata.location}</Text>
          </VStack>
          <VStack w={"full"}>
            <Img src={ddata.imageUrl} w={"350px"}></Img>
          </VStack>
        </HStack>
      </Stack>

      <Stack mt={"7"}>
        <HStack spacing={"3"}>
          <VStack w={"70%"} textAlign={"left"}>
            <VStack w={"full"} spacing={"3"}>
              <Text fontSize="2xl" as={"b"} textAlign={"left"}>
                {ddata.type}
              </Text>

              <Text fontSize="2xl">Rs. {ddata.price} / per head</Text>
            </VStack>

            <VStack w={"full"} spacing={"3"}>
              <HStack>
                <button
                  style={{
                    backgroundColor: "red",
                    border: "none",
                    color: "white",
                    padding: "3px 20px",
                    fontSize: "25px",
                  }}
                  onClick={() => setCount(count + 1)}
                >
                  +
                </button>
                <Text>{count}</Text>
                <button
                  style={{
                    backgroundColor: "red",
                    border: "none",
                    color: "white",
                    padding: "3px 20px",
                    fontSize: "25px",
                  }}
                  disabled={count == 1}
                  onClick={() => setCount(count - 1)}
                >
                  -
                </button>
              </HStack>
            </VStack>

            <Text
              fontSize="xl"
              noOfLines={1}
              color={"gray.700"}
              ml={"3"}
              p={"2"}
            >
              {ddata.longAddress}
            </Text>
            <Text fontSize="xl">{ddata.phoneNO}</Text>
          </VStack>

          <VStack w={"30%"}>
            <Text fontSize="xl" as={"b"}>
              Price: {ddata.price * count}
            </Text>
            <Button
              onClick={() => navigate("/Checkout")}
              colorScheme={"whatsapp"}
            >
              Buy Now
            </Button>
          </VStack>
        </HStack>
      </Stack>
    </div>
  );
}
