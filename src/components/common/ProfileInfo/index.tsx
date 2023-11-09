import { useNavigation } from "@react-navigation/native";
import React from "react";
import { AirbnbRating } from "react-native-ratings";
import { PropsStack } from "../../../routes";
import {
  Button,
  Container,
  DefaultText,
  Hr,
  Name,
  NamePhoneContainer,
  Phone,
  PrincipalInfoContainer,
} from "./styled";

const ProfileInfo = () => {
  const navigation = useNavigation<PropsStack>();

  const Rate = 4;

  return (
    <>
      <Container>
        <PrincipalInfoContainer>
          <NamePhoneContainer>
            <Name>Lucas Queiroga</Name>
            <Phone>(81) 99999-9999</Phone>
          </NamePhoneContainer>
          {!Rate ? (
            <DefaultText
              onPress={() => {
                navigation.navigate("Feedback");
              }}
            >
              Sem Avaliações. Avalie aqui!
            </DefaultText>
          ) : (
            <Button
              onPress={() => {
                navigation.navigate("Feedback");
              }}
            >
              <AirbnbRating
                selectedColor="#5F96ED"
                showRating={false}
                isDisabled={true}
                size={16}
                defaultRating={Rate}
                starContainerStyle={{
                  paddingTop: 4,
                }}
              />
            </Button>
          )}
        </PrincipalInfoContainer>
        <DefaultText>Usuário desde 20/04/23</DefaultText>
        <DefaultText>04 anúncios ativos</DefaultText>
      </Container>
      <Hr />
    </>
  );
};

export default ProfileInfo;
