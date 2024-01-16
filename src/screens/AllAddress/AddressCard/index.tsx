import React, { SetStateAction } from "react";
import { Container, ContentTxt, DeletButton, DeletIcon } from "./styled";
import { Alert } from "react-native";
import { Address } from "../../../entities/User";
import addressService from "../../../services/addressService";

const deleteIcon = require("../../../../assets/icons/trash.png");

interface ItemProps {
  item: Address;
  address: Address[];
  setAddress: React.Dispatch<SetStateAction<Array<Address>>>;
}

const AddressCard = ({ item, address, setAddress }: ItemProps) => {
  const handleDeleteAddress = async () => {
    Alert.alert(
      "Você tem certeza?",
      "Ao fazer isso você deleterá o endereço permanentemente",
      [
        {
          text: "Sim",
          onPress: () => {
            addressService.deleteAddress(item._id);

            const filteredAddresses = address.filter(
              (address) => address._id !== item._id
            );

            setAddress(filteredAddresses);
          },
        },

        {
          text: "Não",
        },
      ]
    );
  };

  return (
    <Container>
      <ContentTxt>{`Rua: ${item.street} - Nº ${item.number}\nUF: ${item.state}\nCEP: ${item.cep}`}</ContentTxt>
      <DeletButton onPress={handleDeleteAddress}>
        <DeletIcon source={deleteIcon} />
      </DeletButton>
    </Container>
  );
};

export default AddressCard;
