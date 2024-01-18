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
import chatService from "../../services/chatService";
import AsyncStorage from "@react-native-async-storage/async-storage";

const share = require("../../../assets/icons/share.png");

type Props = NativeStackScreenProps<PropsNavigationStack, "Product">;

const Product = ({ route }: Props) => {
  const navigation = useNavigation<PropsStack>();
  const { token } = useAuth();

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

  const handleChatSeller = async () => {
    const user = await AsyncStorage.getItem("user");
    const { _id } = JSON.parse(user || "");

    const initialMessage = `Olá, quero saber mais sobre o seu produto, ${route.params.seller.name}`;

    const params = {
      product: route.params._id,
      seller: route.params.seller._id,
      initialMessage,
    };

    const res = await chatService.startChat(params);

    if (res.status === 201) {
      navigation.navigate("Chat", {
        product: route.params,
        sellerName: route.params.seller.name,
        sellerId: route.params.seller._id,
        buyerId: _id,
        messages: [
          {
            content: initialMessage,
            receiver: route.params.seller._id,
            sender: _id,
          },
        ],
      });
    }
  };

  useEffect(() => {
    handleGetFavorites();
  }, []);

  return (
    <>
      <Container contentContainerStyle={{ paddingBottom: 20 }}>
        <BackArrow marginLeft={30} />
        <Title>{route.params.name}</Title>
        <SubTitleContainer>
          <SubTitle>Publicado em {getDate(route.params.createdAt)}</SubTitle>
          <SubTitle>
            {route.params.address.city}, {route.params.address.state}
          </SubTitle>
        </SubTitleContainer>
        <Carousel images={route.params.images} />
        <InfoContainer>
          <Price>R$ {route.params.price}</Price>
          <InteractionsContainer>
            <Like favorites={liked} productId={route.params._id} />
            <Button activeOpacity={0.8}>
              <Share source={share} />
            </Button>
          </InteractionsContainer>
        </InfoContainer>
        <DescriptionComponent desc={route.params.description} />
        <SellerInfo product={route.params} />
        <DefaultButton
          buttonText="Fale com o vendedor"
          buttonType="primary"
          buttonHandle={handleChatSeller}
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
