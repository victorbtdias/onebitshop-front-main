import { Product } from "../../../../screens/Categories";
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
  return (
    <Container>
      <Image source={{ uri: product.productImage }} />
      <TextContainer>
        <Title>{product.title}</Title>
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
