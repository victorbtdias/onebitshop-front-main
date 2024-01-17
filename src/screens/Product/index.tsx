import React from "react";
import {
  Button,
  Container,
  InfoContainer,
  InteractionsContainer,
  Like,
  Price,
  Share,
  SubTitle,
  SubTitleContainer,
  Title,
} from "./styled";
import BackArrow from "../../components/common/BackArrow";
import Carousel from "../../components/Product/Carousel";
import DescriptionComponent from "../../components/Product/Description";
import SellerInfo from "../../components/Product/SellerInfo";
import DefaultButton from "../../components/common/DefaultButton";
import { DenounceText } from "../SellerProfile/styled";
import { useNavigation } from "@react-navigation/native";
import { PropsNavigationStack, PropsStack } from "../../routes";
import NavBar from "../../components/common/NavBar";
import useAuth from "../../hook/useAuth";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import getDate from "../../utils/getDate";

const like = require("../../../assets/icons/like.png");
const share = require("../../../assets/icons/share.png");

type Props = NativeStackScreenProps<PropsNavigationStack, "Product">;

const Product = ({ route }: Props) => {
  const navigation = useNavigation<PropsStack>();
  const { token } = useAuth();
  const { params } = route;

  return (
    <>
      <Container contentContainerStyle={{ paddingBottom: 20 }}>
        <BackArrow marginLeft={30} />
        <Title>{params.name}</Title>
        <SubTitleContainer>
          <SubTitle>Publicado em {getDate(params.createdAt)}</SubTitle>
          <SubTitle>
            {params.address.city}, {params.address.state}
          </SubTitle>
        </SubTitleContainer>
        <Carousel images={params.images} />
        <InfoContainer>
          <Price>R$ {params.price}</Price>
          <InteractionsContainer>
            <Button activeOpacity={0.8}>
              <Like source={like} />
            </Button>
            <Button activeOpacity={0.8}>
              <Share source={share} />
            </Button>
          </InteractionsContainer>
        </InfoContainer>
        <DescriptionComponent desc={params.description} />
        <SellerInfo name={params.seller.name} />
        <DefaultButton
          buttonText="Fale com o vendedor"
          buttonType="primary"
          buttonHandle={() => {}}
          marginVertical={0}
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

export default Product;
