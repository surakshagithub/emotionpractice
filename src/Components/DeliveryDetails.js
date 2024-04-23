import React from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Container, Flex, Text, Box, HStack, Center } from "@chakra-ui/react";
import { css } from "@emotion/react";

const deliveryDetails = [
  {
    title: "HUB",
    value: "_ _ _",
  },
  {
    title: "PLANNED AT",
    value: "Mar 07,01:45",
  },
  {
    title: "ARRIVED AT",
    value: "Mar 08,01:45",
  },
  {
    title: "COMPLETED AT",
    value: "Mar 08,02:45",
  },
  {
    title: "GEO IN",
    value: "N/A: Please verify customer's address",
  },
  {
    title: "GEO OUT",
    value: "N/A: Please verify customer's address",
  },
  {
    title: "DRIVER NAME",
    value: "Panda d",
  },
  {
    title: "TRUCK",
    value: "1352M2/107 - LCR",
  },
  {
    title: "demo row",
    value: "demo value",
  },
];

function DeliveryDetails() {
  return (
    <>
      <Container maxW="xl">
        <Box
          // css={containerStyle}
          maxW="md"
          border="1px"
          borderColor="blackAlpha.900"
          borderRadius="15"
        >
          <Text
            p={3}
            border="1px"
            borderColor="blackAlpha.900"
            borderTopRadius="10"
          >
            Delivery Details
          </Text>
          {deliveryDetails.map((detail) => {
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
                    m={"auto"}
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

export default DeliveryDetails;
