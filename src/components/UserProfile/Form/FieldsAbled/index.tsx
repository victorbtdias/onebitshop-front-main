import DefaultButton from "../../../common/DefaultButton";
import { InputContainer } from "../styled";
import { Input } from "./styled";
import { Alert } from "react-native";
import DropDownComponent from "../../../common/DropDownComponent";
import { useState } from "react";

const FieldsAbled = () => {
  const [select, setSelect] = useState("");

  const Data = [{ value: "Endereço de teste", disabled: true }];

  return (
    <>
      <InputContainer>
        <Input value="Lucas Queiroga" />
      </InputContainer>
      <InputContainer>
        <Input value="(81) 9 9999-9999" />
      </InputContainer>
      <InputContainer>
        <Input value="lucasqueiroga@email.com" />
      </InputContainer>
      <DropDownComponent
        placeholder="Seus endereços"
        setSelected={setSelect}
        data={Data}
        saveMethod="value"
      />
      <InputContainer>
        <Input
          placeholder="Senha"
          placeholderTextColor="#C0C0C1"
          secureTextEntry
        />
      </InputContainer>
      <InputContainer>
        <Input
          placeholder="Confirmar Senha"
          placeholderTextColor="#C0C0C1"
          secureTextEntry
        />
      </InputContainer>
      <DefaultButton
        buttonText="Salvar Alterações"
        buttonHandle={() => {
          Alert.alert("Alterado com sucesso");
        }}
        buttonType="primary"
        marginVertical={10}
      />
    </>
  );
};

export default FieldsAbled;
