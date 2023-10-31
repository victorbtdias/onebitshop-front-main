import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Alert } from "react-native";
import BackArrow from "../../components/common/BackArrow";
import DefaultButton from "../../components/common/DefaultButton";
import { PropsStack } from "../../routes";
import {
  Bold,
  CompanyLogo,
  Container,
  FogetPassword,
  Input,
  InputContainer,
  Logo,
  RegisterText,
} from "./styled";

const logo = require("../../../assets/images/logo.png");
const companyLogo = require("../../../assets/images/logo-obc.png");

const Login = () => {
  const navigation = useNavigation<PropsStack>();

  const handleLogin = () => {
    Alert.alert("Botão de login clicado");
  };

  const handleNavRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <Container>
      <BackArrow marginLeft={30} />
      <Logo source={logo} />
      <InputContainer>
        <Input placeholder="Email" placeholderTextColor="white" />
      </InputContainer>
      <InputContainer>
        <Input
          placeholder="Senha"
          placeholderTextColor="white"
          secureTextEntry={true}
        />
      </InputContainer>
      <FogetPassword>Esqueceu sua senha?</FogetPassword>
      <DefaultButton
        buttonText="Fazer Login"
        buttonHandle={() => {
          handleLogin();
        }}
        buttonType="primary"
        marginVertical={40}
      />
      <RegisterText
        onPress={() => {
          handleNavRegister();
        }}
      >
        Não tem uma conta ainda? <Bold>Crie agora!</Bold>
      </RegisterText>
      <CompanyLogo source={companyLogo} />
    </Container>
  );
};

export default Login;
