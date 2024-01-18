import { useNavigation } from "@react-navigation/native";
import { Product } from "../../../../entities/Product";
import { PropsStack } from "../../../../routes";
import getDate from "../../../../utils/getDate";
import Like from "../../Like";
import {
  Container,
  InfoLikeContainer,
  ProductImage,
  ProductInfoContainer,
  ProductPrice,
  ProductPriceInfoContainer,
  ProductTitle,
  PublishedText,
  SellerInfoContainer,
  SellerName,
} from "./styled";

export interface DataProps {
  data: Product;
  favorite: boolean;
}

const ProductCard = ({ data, favorite }: DataProps) => {
  const navigation = useNavigation<PropsStack>();

  const handleNavProduct = (data: Product) => {
    navigation.navigate("Product", {
      ...data,
    });
  };

  return (
    <Container
      activeOpacity={0.85}
      onPress={() => {
        handleNavProduct(data);
      }}
    >
      <ProductImage source={{ uri: data.images[0].url }} />
      <ProductInfoContainer>
        <ProductPriceInfoContainer>
          <ProductPrice>R$ {data.price}</ProductPrice>
          <ProductTitle numberOfLines={2}>{data.name}</ProductTitle>
        </ProductPriceInfoContainer>
        <InfoLikeContainer>
          <SellerInfoContainer>
            <PublishedText>
              Publicado em {getDate(data.createdAt)} por:
            </PublishedText>
            <SellerName>{data.seller.name}</SellerName>
          </SellerInfoContainer>
          <Like favorites={favorite} productId={data._id} />
        </InfoLikeContainer>
      </ProductInfoContainer>
    </Container>
  );
};

export default ProductCard;
