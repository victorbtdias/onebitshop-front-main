import { useNavigation } from "@react-navigation/native";
import React from "react";
import { AirbnbRating } from "react-native-ratings";
import { User } from "../../../entities/User";
import useAuth from "../../../hook/useAuth";
import { PropsStack } from "../../../routes";
import getDate from "../../../utils/getDate";
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

interface Props {
  userInfo: User;
}

const ProfileInfo = ({ userInfo }: Props) => {
  const navigation = useNavigation<PropsStack>();
  const { token } = useAuth();

  const Rate = userInfo.averageRating;

  return (
    <>
      <Container>
        <PrincipalInfoContainer>
          <NamePhoneContainer>
            <Name>{userInfo.name}</Name>
            <Phone>{userInfo.phone}</Phone>
          </NamePhoneContainer>
          {!Rate ? (
            <DefaultText
              onPress={() => {
                !token
                  ? navigation.navigate("Login")
                  : navigation.navigate("Feedback");
              }}
            >
              Sem Avaliações. Avalie aqui!
            </DefaultText>
          ) : (
            <Button
              onPress={() => {
                !token
                  ? navigation.navigate("Login")
                  : navigation.navigate("Feedback");
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
        <DefaultText>Usuário desde {getDate(userInfo.createdAt)}</DefaultText>
        <DefaultText>
          {userInfo.products.length.toString().padStart(2, "0")} anúncios ativos
        </DefaultText>
      </Container>
      <Hr />
    </>
  );
};

export default ProfileInfo;
