import { Text } from "react-native";
import React from "react";
import { Container } from "./styled";
import NavBar from "../../components/common/NavBar";
import DefaultTitle from "../../components/common/DefaultTitle";

const UserProfile = () => {
  return (
    <>
      <Container>
        <DefaultTitle title="MEU PERFIL" fontSize={20} />
      </Container>
      <NavBar />
    </>
  );
};

export default UserProfile;
