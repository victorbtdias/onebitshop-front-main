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
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../../routes";
import { Product } from "../../../entities/Product";
import getDate from "../../../utils/getDate";
import productService from "../../../services/productService";

const trashIcon = require("../../../../assets/icons/trash.png");
const heartIcon = require("../../../../assets/icons/like.png");

interface ProductProps {
  products: Product[];
  seller: boolean;
}

const UserAds = ({ products, seller }: ProductProps) => {
  const navigation = useNavigation<PropsStack>();

  const handleDeleteProduct = async (_id: string) => {
    const res = await productService.deleteProduct(_id);

    if (res.status === 204) {
      Alert.alert("Produto deletado com sucesso");
      navigation.navigate("Home");
    }
  };

  return (
    <Container>
      <TotalAds>
        Você tem {products.length.toString().padStart(2, "0")} anúncios
      </TotalAds>
      {products.length > 0 ? (
        products.map((product) => (
          <AdCard
            activeOpacity={0.85}
            onPress={() => {
              !seller
                ? navigation.navigate("UpdateProduct", {
                    _id: product._id,
                    name: product.name,
                    price: product.price,
                    images: product.images,
                    description: product.description,
                    category: product.category,
                    addressId: product.address._id,
                  })
                : navigation.navigate("Product", {
                    ...product,
                  });
            }}
            key={product._id}
          >
            <Image
              source={{
                uri: product?.images[0].url,
              }}
            />
            <InfoContainer>
              <PriceTitleContainer>
                <Price>R$ {product.price}</Price>
                <Title numberOfLines={2}>{product.name}</Title>
              </PriceTitleContainer>
              <InfoIconContainer>
                <PublishedText>
                  Publicado em {getDate(product.createdAt)}
                </PublishedText>
                {!seller ? (
                  <IconButton
                    onPress={() => {
                      Alert.alert(
                        "Você tem certeza?",
                        "Ao fazer isso você deleterá o produto permanentemente.",
                        [
                          {
                            text: "Sim",
                            onPress: () => {
                              handleDeleteProduct(product._id);
                            },
                          },
                          {
                            text: "Não",
                          },
                        ]
                      );
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
