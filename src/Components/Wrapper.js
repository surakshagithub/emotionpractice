import { Container } from "@chakra-ui/react";
import React from "react";
import Details from "./Details";

function Wrapper() {
  return (
    <>
      <Container my={50} maxH="100%" maxW="80%" bg={"blackAlpha.600"}>
        <Details />
      </Container>
    </>
  );
}

export default Wrapper;
