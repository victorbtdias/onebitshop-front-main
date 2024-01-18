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
          buttonHandle={() => {}}
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
