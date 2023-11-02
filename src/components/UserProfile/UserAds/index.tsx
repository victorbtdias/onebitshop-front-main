import React from "react";
import {
  AdCard,
  Container,
  Image,
  InfoContainer,
  InfoTrashContainer,
  NoAds,
  Price,
  PriceTitleContainer,
  PublishedText,
  Title,
  TotalAds,
  TrashButton,
  TrashIcon,
} from "./styled";
import { Alert } from "react-native";

const trashIcon = require("../../../../assets/icons/trash.png");

interface Product {
  id: string;
  productImage: string;
  price: string;
  title: string;
  publishedData: string;
}

interface ProductProps {
  products: Product[];
}

const UserAds = ({ products }: ProductProps) => {
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
              <InfoTrashContainer>
                <PublishedText>
                  Publicado em {product.publishedData}
                </PublishedText>
                <TrashButton
                  onPress={() => {
                    Alert.alert("Item para ser excluído");
                  }}
                  activeOpacity={0.85}
                >
                  <TrashIcon source={trashIcon} />
                </TrashButton>
              </InfoTrashContainer>
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
