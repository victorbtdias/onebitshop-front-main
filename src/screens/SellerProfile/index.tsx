import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import DefaultButton from "../../components/common/DefaultButton";
import DefaultTitle from "../../components/common/DefaultTitle";
import NavBar from "../../components/common/NavBar";
import ProfileInfo from "../../components/common/ProfileInfo";
import UserAds from "../../components/UserProfile/UserAds";
import useAuth from "../../hook/useAuth";
import { PropsNavigationStack, PropsStack } from "../../routes";
import { AdsContainer, Container, DenounceText } from "./styled";
import profileService from "../../services/profileService";
import Loader from "../Loader";
import { User } from "../../entities/User";
import AsyncStorage from "@react-native-async-storage/async-storage";
import chatService from "../../services/chatService";
import { Alert } from "react-native";

type Props = NativeStackScreenProps<PropsNavigationStack, "SellerProfile">;

const SellerProfile = ({ route }: Props) => {
  const navigation = useNavigation<PropsStack>();
  const { token } = useAuth();

  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState<User>();

  const handleGetInfos = async () => {
    const data = await profileService.getSellerProfile(route.params);
    setUserInfo(data?.data);
    setLoading(false);
  };

  useEffect(() => {
    handleGetInfos();
  }, []);

  if (!userInfo || loading) {
    return <Loader />;
  }

  const handleChatSeller = async () => {
    if (userInfo?.products.length <= 0) {
      Alert.alert(
        "Esse vendedor não vende nada, então você não pode falar com ele!"
      );
      return;
    }

    const user = await AsyncStorage.getItem("user");
    const { _id } = JSON.parse(user || "");

    const initialMessage = `Olá, quero saber mais sobre o seu produto, ${userInfo.name}`;

    const params = {
      product: userInfo.products[0]._id,
      seller: userInfo._id,
      initialMessage,
    };

    const res = await chatService.startChat(params);

    if (res.status === 201) {
      navigation.navigate("Chat", {
        product: userInfo.products[0],
        sellerName: userInfo.name,
        sellerId: userInfo._id,
        buyerId: _id,
        messages: [
          {
            content: initialMessage,
            receiver: userInfo._id,
            sender: _id,
          },
        ],
      });
    }
  };

  return (
    <>
      <Container contentContainerStyle={{ paddingBottom: 125 }}>
        <DefaultTitle title="PERFIL DO VENDEDOR" fontSize={20} />
        <ProfileInfo userInfo={userInfo} />
        <AdsContainer>
          <UserAds products={userInfo?.products} seller={true} />
        </AdsContainer>
        <DefaultButton
          buttonText="FALAR COM O VENDEDOR"
          buttonHandle={handleChatSeller}
          buttonType="primary"
          marginVertical={20}
        />
        <DenounceText
          onPress={() => {
            !token
              ? navigation.navigate("Login")
              : navigation.navigate("Denounce");
          }}
        >
          Achou algo estranho? Denuncie!
        </DenounceText>
      </Container>
      <NavBar />
    </>
  );
};

export default SellerProfile;
