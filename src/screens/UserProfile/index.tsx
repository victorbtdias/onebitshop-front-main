import React from "react";
import { Container } from "./styled";
import NavBar from "../../components/common/NavBar";
import DefaultTitle from "../../components/common/DefaultTitle";
import ProfileInfo from "../../components/common/ProfileInfo";
import Form from "../../components/UserProfile/Form";

const UserProfile = () => {
  return (
    <>
      <Container
        contentContainerStyle={{
          paddingBottom: 120,
        }}
      >
        <DefaultTitle title="MEU PERFIL" fontSize={20} />
        <ProfileInfo />
        <Form />
      </Container>
      <NavBar />
    </>
  );
};

export default UserProfile;
