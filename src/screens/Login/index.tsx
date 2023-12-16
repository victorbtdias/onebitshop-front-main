import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import BackArrow from "../../components/common/BackArrow";
import DefaultButton from "../../components/common/DefaultButton";
import useAuth from "../../hook/useAuth";
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
  const [fields, setFields] = useState({
    email: "",
    password: "",
  });

  const { login } = useAuth();

  const handleLogin = () => {
    login(fields.email, fields.password);
  };

  return (
    <Container>
      <BackArrow marginLeft={30} />
      <Logo source={logo} />
      <InputContainer>
        <Input
          placeholder="Email"
          placeholderTextColor="#C0C0C1"
          value={fields.email}
          onChangeText={(val) => {
            setFields({
              ...fields,
              email: val,
            });
          }}
        />
      </InputContainer>
      <InputContainer>
        <Input
          placeholder="Senha"
          placeholderTextColor="#C0C0C1"
          secureTextEntry={true}
          value={fields.password}
          onChangeText={(val) => {
            setFields({
              ...fields,
              password: val,
            });
          }}
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
          navigation.navigate("Register");
        }}
      >
        Não tem uma conta ainda? <Bold>Crie agora!</Bold>
      </RegisterText>
      <CompanyLogo source={companyLogo} />
    </Container>
  );
};

export default Login;
