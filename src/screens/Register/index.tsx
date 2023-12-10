import React, { useState } from "react";
import { AcceptTerms, Container, Title } from "./styled";
import BackArrow from "../../components/common/BackArrow";
import Form from "../../components/Register/Form";
import DefaultButton from "../../components/common/DefaultButton";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../routes";
import { CompanyLogo } from "../Login/styled";
import useAuth from "../../hook/useAuth";
import { Alert } from "react-native";

const companyLogo = require("../../../assets/images/logo-obc.png");

const Register = () => {
  const navigation = useNavigation<PropsStack>();

  const [fields, setFields] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    confirmPassword: "",
  });

  const { register } = useAuth();

  const handleRegister = async () => {
    if (fields.password.length < 4) {
      Alert.alert("Sua senha precisa ter mais de 4 caracteres");

      return;
    } else if (fields.password !== fields.confirmPassword) {
      Alert.alert(
        "Sua senha e a confirmação estão diferentes, por favor, coloque igual."
      );

      return;
    } else if (
      !fields.name ||
      !fields.email ||
      !fields.password ||
      !fields.phone
    ) {
      Alert.alert("Preencha todos os campos!");

      return;
    }

    register(fields.name, fields.email, fields.password, fields.phone);

    Alert.alert("Registro feito com sucesso!");
  };

  return (
    <Container
      contentContainerStyle={{
        paddingBottom: 60,
      }}
    >
      <BackArrow marginLeft={20} />
      <Title>CRIAR UMA CONTA</Title>
      <Form fields={fields} setFields={setFields} />
      <DefaultButton
        buttonText="FAZER REGISTRO"
        buttonHandle={handleRegister}
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
