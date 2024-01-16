import React from "react";
import {
  AddressText,
  Container,
  DeleteAccount,
  LogOutButton,
  LogOutText,
} from "./styled";
import NavBar from "../../components/common/NavBar";
import DefaultTitle from "../../components/common/DefaultTitle";
import ProfileInfo from "../../components/common/ProfileInfo";
import Form from "../../components/UserProfile/Form";
import UserAds from "../../components/UserProfile/UserAds";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../routes";

const Data = [
  {
    id: "1",
    productImage:
      "https://http2.mlstatic.com/D_NQ_NP_715237-MLA45308505060_032021-O.jpg",
    price: "2600",
    title: "Playstation 4 novo com 3 jogos acompanhando",
    publishedData: "14/02/23",
  },
  {
    id: "2",
    productImage:
      "https://m.media-amazon.com/images/I/61hJ40qZKKL._AC_SX679_.jpg",
    price: "2600",
    title: "Playstation 5 novo com 1 jogo acompanhando",
    publishedData: "14/02/23",
  },
  {
    id: "3",
    productImage:
      "https://http2.mlstatic.com/D_NQ_NP_715237-MLA45308505060_032021-O.jpg",
    price: "2600",
    title: "Playstation 4 novo com 2 jogos acompanhando",
    publishedData: "14/02/23",
  },
];

const UserProfile = () => {
  const navigation = useNavigation<PropsStack>();

  return (
    <>
      <Container
        contentContainerStyle={{
          paddingBottom: 120,
        }}
      >
        <DefaultTitle title="MEU PERFIL" fontSize={20} />
        <ProfileInfo />
        <Form />
        <AddressText
          onPress={() => {
            navigation.navigate("AllAddress");
          }}
        >
          Gerenciar Endereços
        </AddressText>
        {/* <UserAds products={Data} seller={true} /> */}
        <LogOutButton
          onPress={() => {
            Alert.alert("Você deslogou!");
          }}
        >
          <LogOutText>Sair da sua conta</LogOutText>
        </LogOutButton>
        <DeleteAccount
          onPress={() => {
            Alert.alert(
              "Você tem certeza?",
              "Ao fazer isso você deleterá a sua conta permanentemente",
              [
                {
                  text: "Sim",
                  onPress: () => {
                    Alert.alert("Você deletou a sua conta!");
                  },
                },

                {
                  text: "Não",
                },
              ]
            );
          }}
        >
          Excluir conta
        </DeleteAccount>
      </Container>
      <NavBar />
    </>
  );
};

export default UserProfile;
