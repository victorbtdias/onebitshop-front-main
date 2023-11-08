import { useNavigation } from "@react-navigation/native";
import DefaultTitle from "../../components/common/DefaultTitle";
import NavBar from "../../components/common/NavBar";
import ProfileInfo from "../../components/common/ProfileInfo";
import { PropsStack } from "../../routes";
import { Button, ButtonText, Container, Input, InputContainer } from "./styled";
import { Alert } from "react-native";

const Denounce = () => {
  const navigation = useNavigation<PropsStack>();

  const handleDenounce = () => {
    navigation.goBack();

    Alert.alert(
      "Muito obrigado pela sua denúncia, iremos verificar e retornar para você o resultado dela."
    );
  };

  return (
    <>
      <Container>
        <DefaultTitle title="DENUNCIAR" fontSize={20} />
        <ProfileInfo />
        <InputContainer>
          <Input
            multiline
            placeholder="Confirme que você deseja denunciar o perfil acima e escreva aqui seus motivos"
          />
        </InputContainer>
        <Button onPress={handleDenounce}>
          <ButtonText>DENUNCIAR</ButtonText>
        </Button>
        <NavBar />
      </Container>
    </>
  );
};

export default Denounce;
