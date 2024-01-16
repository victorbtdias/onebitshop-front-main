import React, { useState } from "react";
import { Container, Input, InputContainer, InputMask } from "./styled";
import DefaultTitle from "../../components/common/DefaultTitle";
import DefaultButton from "../../components/common/DefaultButton";
import axios from "axios";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../routes";
import addressService from "../../services/addressService";

const AddAddress = () => {
  const navigation = useNavigation<PropsStack>();

  const [fields, setFields] = useState({
    cep: "",
    street: "",
    number: "",
    complement: "",
    district: "",
    city: "",
    state: "",
  });

  const handleGetAddress = async () => {
    const { data } = await axios.get(
      `https://viacep.com.br/ws/${fields.cep}/json/`
    );

    setFields({
      ...fields,
      street: data.logradouro,
      state: data.uf,
      city: data.localidade,
      district: data.bairro,
    });
  };

  const handleAddAddress = async () => {
    if (fields.cep.length < 8) {
      Alert.alert("Você precisa preencher o CEP");
      return;
    } else if (
      Object.entries(fields)
        .filter(([key, value]) => key !== "complement")
        .some(([key, value]) => value === "")
    ) {
      Alert.alert("Campo obrigatório vazio");
      return;
    }

    const params = fields;
    const data = await addressService.addAddress(params);

    if (data.status === 201) {
      navigation.navigate("AllAddress");
    }
  };

  return (
    <Container>
      <DefaultTitle fontSize={18} title="CADASTRAR ENDEREÇO" />
      <InputContainer>
        <InputMask
          type={"zip-code"}
          placeholder="Cep"
          value={fields.cep}
          onChangeText={(value) =>
            setFields({ ...fields, cep: value.replace(/[^0-9]/g, "") })
          }
          onBlur={() => {
            handleGetAddress();
          }}
          placeholderTextColor="#C0C0C1"
        />
      </InputContainer>
      <InputContainer>
        <Input
          placeholder="Rua"
          placeholderTextColor="#C0C0C1"
          value={fields.street}
          onChangeText={(val) => {
            setFields({ ...fields, street: val });
          }}
        />
      </InputContainer>
      <InputContainer>
        <Input
          placeholder="Número"
          placeholderTextColor="#C0C0C1"
          keyboardType="number-pad"
          value={fields.number}
          onChangeText={(val) => {
            setFields({ ...fields, number: val });
          }}
        />
      </InputContainer>
      <InputContainer>
        <Input
          placeholder="Complemento"
          placeholderTextColor="#C0C0C1"
          value={fields.complement}
          onChangeText={(val) => {
            setFields({ ...fields, complement: val });
          }}
        />
      </InputContainer>
      <InputContainer>
        <Input
          placeholder="Bairro"
          placeholderTextColor="#C0C0C1"
          value={fields.district}
          onChangeText={(val) => {
            setFields({ ...fields, district: val });
          }}
        />
      </InputContainer>
      <InputContainer>
        <Input
          placeholder="Cidade"
          placeholderTextColor="#C0C0C1"
          value={fields.city}
          onChangeText={(val) => {
            setFields({ ...fields, city: val });
          }}
        />
      </InputContainer>
      <InputContainer>
        <Input
          placeholder="Estado"
          placeholderTextColor="#C0C0C1"
          maxLength={2}
          value={fields.state}
          onChangeText={(val) => {
            setFields({ ...fields, state: val });
          }}
        />
      </InputContainer>
      <DefaultButton
        buttonText="Cadastrar Endereço"
        buttonHandle={handleAddAddress}
        buttonType="primary"
        marginVertical={30}
      />
    </Container>
  );
};

export default AddAddress;
