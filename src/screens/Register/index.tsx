import React from "react";
import { AcceptTerms, Container, Title } from "./styled";
import BackArrow from "../../components/common/BackArrow";
import Form from "../../components/Register/Form";
import DefaultButton from "../../components/common/DefaultButton";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../routes";
import { CompanyLogo } from "../Login/styled";

const companyLogo = require("../../../assets/images/logo-obc.png");

const Register = () => {
  const navigation = useNavigation<PropsStack>();

  return (
    <Container
      contentContainerStyle={{
        paddingBottom: 60,
      }}
    >
      <BackArrow marginLeft={20} />
      <Title>CRIAR UMA CONTA</Title>
      <Form />
      <DefaultButton
        buttonText="FAZER REGISTRO"
        buttonHandle={() => {}}
        buttonType="primary"
        marginVertical={30}
      />
      <AcceptTerms>
        Ao fazer o registro aceito{"\n"}os termos de privacidade
      </AcceptTerms>
      <DefaultButton
        buttonText="FAZER LOGIN"
        buttonHandle={() => {
          navigation.navigate("Login");
        }}
        buttonType="secondary"
        marginVertical={30}
      />
      <CompanyLogo source={companyLogo} />
    </Container>
  );
};

export default Register;
