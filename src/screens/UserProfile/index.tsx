import React, { useEffect, useState } from "react";
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
import useAuth from "../../hook/useAuth";
import profileService from "../../services/profileService";
import { User } from "../../entities/User";
import Loader from "../Loader";

const UserProfile = () => {
  const navigation = useNavigation<PropsStack>();
  const [userInfo, setUserInfo] = useState<User>();
  const [loading, setLoading] = useState(true);

  const { logout } = useAuth();

  const handleUserInfos = async () => {
    const { data } = await profileService.getUserProfile();

    setUserInfo(data);
    setLoading(false);
  };

  useEffect(() => {
    handleUserInfos();
  }, []);

  if (!userInfo) return <Loader />;

  return (
    <>
      <Container
        contentContainerStyle={{
          paddingBottom: 120,
        }}
      >
        <DefaultTitle title="MEU PERFIL" fontSize={20} />
        <ProfileInfo userInfo={userInfo} />
        <Form userInfo={userInfo} />
        <AddressText
          onPress={() => {
            navigation.navigate("AllAddress", { newAddress: false });
          }}
        >
          Gerenciar Endereços
        </AddressText>
        {/* <UserAds products={userInfo} seller={true} /> */}
        <LogOutButton onPress={logout}>
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
