import React from "react";
import { Wrapper, Container } from "./pinStyles";
const Pin = ({ img }) => {
  return (
    <Wrapper>
      <Container>
        <img src={img} alt="" />
      </Container>
    </Wrapper>
  );
};

export default Pin;
