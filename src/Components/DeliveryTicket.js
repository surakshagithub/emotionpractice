/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import React from "react";
import { Container, Flex, Text, Box, HStack, Center } from "@chakra-ui/react";
import { css } from "@emotion/react";

const containerStyle = {
  border: "1px",
  borderColor: "black",
  borderRadius: "10",
  backgroundColor: "gray",
};

const borderStyle = {
  border: "1px solid black",
};

const deliveryTicket = [
  {
    title: "ORDER NO.",
    value: "23232",
  },
  {
    title: "ORDER NO.",
    value: "23232",
  },
  {
    title: "PHONE NO.",
    value: "1212121212",
  },
  {
    title: "PHONE NO.",
    value: "1212121212",
  },
  {
    title: "CARRIER NO.",
    value: "23232",
  },
  {
    title: "BOL#",
    value: "23232",
  },
  {
    title: "TRANSFER#",
    value: "23232",
  },
  {
    title: "TRANSFER#***",
    value: "23232",
  },
  {
    title: "TRANSFER###",
    value: "2323112",
  },
];

function DeliveryTicket() {
  return (
    <>
      <Container maxW="400px">
        <Box
          css={css(borderStyle)}
          // border="1px"
          // borderColor="black"
          // borderRadius="10"
          maxW="md"
        >
          <Text
            p={3}
            border="1px"
            borderColor="blackAlpha.900"
            borderTopRadius="10"
          >
            Delivery Ticket
          </Text>
          {deliveryTicket.map((detail) => {
            return (
              <>
                <Flex direction={"row"}>
                  <Box
                    pl={3}
                    border="1px"
                    borderColor={"blackAlpha.600"}
                    bg="blackAlpha.500"
                    w="35%"
                    h="10"
                    color={"whiteAlpha.900"}
                  >
                    {detail.title}
                  </Box>

                  <Box
                    pl={3}
                    w="80%"
                    h="10"
                    bg="blackAlpha.500"
                    border="1px"
                    color={"whiteAlpha.900"}
                    borderColor={"blackAlpha.900"}
                  >
                    {detail.value}
                  </Box>
                </Flex>
              </>
            );
          })}
        </Box>
      </Container>
    </>
  );
}

export default DeliveryTicket;
