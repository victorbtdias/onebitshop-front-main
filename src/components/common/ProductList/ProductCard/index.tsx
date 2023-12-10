import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import { Product } from "../../../../entities/Product";
import { PropsStack } from "../../../../routes";
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

const likeImage = require("../../../../../assets/icons/like.png");
const likedImage = require("../../../../../assets/icons/liked.png");

export interface DataProps {
  data: Product;
}

const ProductCard = ({ data }: DataProps) => {
  const navigation = useNavigation<PropsStack>();

  const handleNavProduct = () => {
    navigation.navigate("Product");
  };

  return (
    <Container activeOpacity={0.85} onPress={handleNavProduct}>
      {/* <ProductImage source={{ uri: data.images[0].url }} /> */}
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
            {/* <SellerName>{data.seller.name}</SellerName> */}
          </SellerInfoContainer>
          <LikeButton
            onPress={() => {
              Alert.alert("Você deu Like");
            }}
            activeOpacity={0.85}
          >
            <LikeImage source={likeImage} />
          </LikeButton>
        </InfoLikeContainer>
      </ProductInfoContainer>
    </Container>
  );
};

export default ProductCard;
