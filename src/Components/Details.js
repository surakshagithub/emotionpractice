/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import React from "react";
import { Container, Flex, Text, Box, HStack, Center } from "@chakra-ui/react";
import { css } from "@emotion/react";
import DeliveryTicket from "./DeliveryTicket";
import DeliveryDetails from "./DeliveryDetails";

const containerStyle = {
  border: "1px",
  borderColor: "black",
  borderRadius: "10",
  backgroundColor: "gray",
};

const borderStyle = {
  border: "1px",
  borderColor: "black",
  borderRadius: "10",
};

const boxStyle = {
  color: "white",
  border: "1px",
  borderColor: "black",
};
function Details() {
  return (
    <>
      <HStack>
        <DeliveryTicket />
        <DeliveryDetails />
      </HStack>
    </>
  );
}

export default Details;
