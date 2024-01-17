import { useNavigation } from "@react-navigation/native";
import { Product } from "../../../../entities/Product";
import { PropsStack } from "../../../../routes";
import {
  Container,
  Image,
  LikeImage,
  Price,
  SellerLikeContainer,
  SellerName,
  TextContainer,
  Title,
} from "./styled";

interface ProductProps {
  product: Product;
}

const likeImage = require("../../../../../assets/icons/like.png");

const CategoryCard = ({ product }: ProductProps) => {
  const navigation = useNavigation<PropsStack>();

  const handleProduct = () => {
    navigation.navigate("Product", { ...product });
  };

  return (
    <Container onPress={handleProduct}>
      <Image source={{ uri: product.images[0].url }} />
      <TextContainer>
        <Title>{product.name}</Title>
        <Price>R$ {product.price}</Price>
        <SellerLikeContainer>
          <SellerName>Lucas Queiroga</SellerName>
          <LikeImage source={likeImage} />
        </SellerLikeContainer>
      </TextContainer>
    </Container>
  );
};

export default CategoryCard;
