import React from "react";
import { Address } from "..";
import { Container, ContentTxt, DeletButton, DeletIcon } from "./styled";
import { Alert } from "react-native";

const deleteIcon = require("../../../../assets/icons/trash.png");

interface ItemProps {
  item: Address;
}

const AddressCard = ({ item }: ItemProps) => {
  return (
    <Container>
      <ContentTxt>{`Rua: ${item.street} - Nº ${item.number}\nUF: ${item.state}\nCEP: ${item.cep}`}</ContentTxt>
      <DeletButton
        onPress={() => {
          Alert.alert("Deletado");
        }}
      >
        <DeletIcon source={deleteIcon} />
      </DeletButton>
    </Container>
  );
};

export default AddressCard;
