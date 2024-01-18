import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  InfoContainer,
  InteractionsContainer,
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
import favoriteService from "../../services/favoriteService";
import { Product as ProductType } from "../../entities/Product";
import Like from "../../components/common/Like";

const share = require("../../../assets/icons/share.png");

type Props = NativeStackScreenProps<PropsNavigationStack, "Product">;

const Product = ({ route }: Props) => {
  const navigation = useNavigation<PropsStack>();
  const { token } = useAuth();
  const { params } = route;

  const [liked, setLiked] = useState(false);

  const handleGetFavorites = async () => {
    if (!token) return;

    const res = await favoriteService.getFavorites();

    const isLiked = res.data.map((val: ProductType) => {
      return val._id;
    });

    const liked = isLiked.some((liked: string) => route.params._id === liked);

    setLiked(liked);
  };

  useEffect(() => {
    handleGetFavorites();
  }, []);

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
            <Like favorites={liked} productId={route.params._id} />
            <Button activeOpacity={0.8}>
              <Share source={share} />
            </Button>
          </InteractionsContainer>
        </InfoContainer>
        <DescriptionComponent desc={params.description} />
        <SellerInfo product={route.params} />
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
