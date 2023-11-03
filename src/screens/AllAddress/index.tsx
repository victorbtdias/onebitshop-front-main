import React from "react";
import { Container } from "./styled";
import NavBar from "../../components/common/NavBar";
import DefaultTitle from "../../components/common/DefaultTitle";

const AllAddress = () => {
  return (
    <>
      <Container>
        <DefaultTitle fontSize={18} title="TODOS OS ENDEREÇOS" />
      </Container>
      <NavBar />
    </>
  );
};

export default AllAddress;
