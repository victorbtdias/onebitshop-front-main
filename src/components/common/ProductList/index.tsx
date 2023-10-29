import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Alert, FlatList, ListRenderItem } from "react-native";
import { PropsStack } from "../../../routes";
import {
  Container,
  InfoLikeContainer,
  LikeButton,
  LikeImage,
  ProductImage,
  ProductInfoContainer,
  ProductPrice,
  ProductPriceInfoContainer,
  ProductTitle,
  PublishedText,
  SellerInfoContainer,
  SellerName,
} from "./styled";

const likeImage = require("../../../../assets/icons/like.png");
const likedImage = require("../../../../assets/icons/liked.png");

export interface ProductType {
  _id: string;
  productImage: string;
  price: string;
  name: string;
  publishedData: string;
  SellerName: string;
  liked: boolean;
}

const Data = [
  {
    _id: "1",
    productImage:
      "https://http2.mlstatic.com/D_NQ_NP_715237-MLA45308505060_032021-O.jpg",
    price: "2600",
    name: "Playstation 4 Pro, seminovo",
    publishedData: "14/02/23",
    SellerName: "Lucas Queiroga",
    liked: false,
  },
  {
    _id: "2",
    productImage:
      "https://http2.mlstatic.com/D_NQ_NP_715237-MLA45308505060_032021-O.jpg",
    price: "3600",
    name: "Playstation 4 Pro, seminovo",
    publishedData: "14/02/23",
    SellerName: "Lucas Queiroga",
    liked: true,
  },
  {
    _id: "3",
    productImage:
      "https://http2.mlstatic.com/D_NQ_NP_715237-MLA45308505060_032021-O.jpg",
    price: "3600",
    name: "Playstation 4 Pro, seminovo",
    publishedData: "14/02/23",
    SellerName: "Lucas Queiroga",
    liked: false,
  },
  {
    _id: "4",
    productImage:
      "https://http2.mlstatic.com/D_NQ_NP_715237-MLA45308505060_032021-O.jpg",
    price: "3600",
    name: "Playstation 4 Pro, seminovo",
    publishedData: "14/02/23",
    SellerName: "Lucas Queiroga",
    liked: true,
  },
  {
    _id: "5",
    productImage:
      "https://http2.mlstatic.com/D_NQ_NP_715237-MLA45308505060_032021-O.jpg",
    price: "3600",
    name: "Playstation 4 Pro, seminovo",
    publishedData: "14/02/23",
    SellerName: "Lucas Queiroga",
    liked: false,
  },
];

const ProductList = () => {
  const navigation = useNavigation<PropsStack>();

  const handleNavProduct = () => {
    navigation.navigate("Home");
  };

  const Item = ({ data }: { data: ProductType }) => (
    <Container
      activeOpacity={0.85}
      onPress={() => {
        Alert.alert("Navegação para o produto");
      }}
    >
      <ProductImage source={{ uri: data.productImage }} />
      <ProductInfoContainer>
        <ProductPriceInfoContainer>
          <ProductPrice>R$ {data.price}</ProductPrice>
          <ProductTitle numberOfLines={2}>{data.name}</ProductTitle>
        </ProductPriceInfoContainer>
        <InfoLikeContainer>
          <SellerInfoContainer>
            <PublishedText>
              Publicado em {data.publishedData} por:
            </PublishedText>
            <SellerName>{data.SellerName}</SellerName>
          </SellerInfoContainer>
          <LikeButton
            onPress={() => {
              Alert.alert("Você deu Like");
            }}
            activeOpacity={0.85}
          >
            {!data.liked ? (
              <LikeImage source={likeImage} />
            ) : (
              <LikeImage source={likedImage} />
            )}
          </LikeButton>
        </InfoLikeContainer>
      </ProductInfoContainer>
    </Container>
  );

  const renderItem: ListRenderItem<ProductType> = ({ item }) => (
    <Item data={item} />
  );

  return (
    <FlatList
      data={Data}
      keyExtractor={(item: ProductType) => item._id}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 80 }}
    />
  );
};

export default ProductList;
