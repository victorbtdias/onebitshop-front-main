import React from "react";
import {
  AdCard,
  Container,
  Icon,
  IconButton,
  Image,
  InfoContainer,
  InfoIconContainer,
  NoAds,
  Price,
  PriceTitleContainer,
  PublishedText,
  Title,
  TotalAds,
} from "./styled";
import { Alert } from "react-native";

const trashIcon = require("../../../../assets/icons/trash.png");
const heartIcon = require("../../../../assets/icons/like.png");

interface Product {
  id: string;
  productImage: string;
  price: string;
  title: string;
  publishedData: string;
}

interface ProductProps {
  products: Product[];
  seller: boolean;
}

const UserAds = ({ products, seller }: ProductProps) => {
  return (
    <Container>
      <TotalAds>Você tem 3 anúncios</TotalAds>
      {products.length > 0 ? (
        products.map((product) => (
          <AdCard
            activeOpacity={0.85}
            onPress={() => {
              Alert.alert("Você clicou no produto!");
            }}
            key={product.id}
          >
            <Image
              source={{
                uri: product.productImage,
              }}
            />
            <InfoContainer>
              <PriceTitleContainer>
                <Price>R$ {product.price}</Price>
                <Title numberOfLines={2}>{product.title}</Title>
              </PriceTitleContainer>
              <InfoIconContainer>
                <PublishedText>
                  Publicado em {product.publishedData}
                </PublishedText>
                {!seller ? (
                  <IconButton
                    onPress={() => {
                      Alert.alert("Item para ser excluído");
                    }}
                    activeOpacity={0.85}
                  >
                    <Icon source={trashIcon} />
                  </IconButton>
                ) : (
                  <IconButton
                    onPress={() => {
                      Alert.alert("Item para ser excluído");
                    }}
                    activeOpacity={0.85}
                  >
                    <Icon source={heartIcon} />
                  </IconButton>
                )}
              </InfoIconContainer>
            </InfoContainer>
          </AdCard>
        ))
      ) : (
        <NoAds>Por enquanto você não criou anúncios</NoAds>
      )}
    </Container>
  );
};
export default UserAds;
