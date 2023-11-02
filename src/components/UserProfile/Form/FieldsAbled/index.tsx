import DefaultButton from "../../../common/DefaultButton";
import { InputContainer } from "../styled";
import { AddressText, Input } from "./styled";
import { Alert } from "react-native";

const FieldsAbled = () => {
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
      <InputContainer>
        <Input value="DROPDOWN" />
      </InputContainer>
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
      <AddressText>Gerenciar Endereços</AddressText>
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
