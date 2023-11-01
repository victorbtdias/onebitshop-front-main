import { Text } from "react-native";
import React from "react";
import { Container } from "./styled";
import NavBar from "../../components/common/NavBar";
import DefaultTitle from "../../components/common/DefaultTitle";
import ProfileInfo from "../../components/common/ProfileInfo";

const UserProfile = () => {
  return (
    <>
      <Container>
        <DefaultTitle title="MEU PERFIL" fontSize={20} />
        <ProfileInfo />
      </Container>
      <NavBar />
    </>
  );
};

export default UserProfile;
