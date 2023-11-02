import { Alert } from "react-native";
import React from "react";
import {
  Container,
  EditButton,
  EditButtonContainer,
  EditImage,
} from "./styled";
import FieldsDisabled from "./FieldsDisabled";

const edit = require("../../../../assets/icons/edit.png");

const Form = () => {
  return (
    <Container>
      <EditButtonContainer>
        <EditButton
          onPress={() => {
            Alert.alert("Testando o botão!");
          }}
        >
          <EditImage source={edit} />
        </EditButton>
      </EditButtonContainer>
      <FieldsDisabled />
    </Container>
  );
};

export default Form;
