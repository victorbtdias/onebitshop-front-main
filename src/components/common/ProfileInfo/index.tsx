import React from "react";
import { AirbnbRating } from "react-native-ratings";
import {
  Container,
  DefaultText,
  Hr,
  Name,
  NamePhoneContainer,
  Phone,
  PrincipalInfoContainer,
} from "./styled";

const ProfileInfo = () => {
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
            <DefaultText>Sem Avaliações</DefaultText>
          ) : (
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
