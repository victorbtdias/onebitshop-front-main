import { Product } from "../../../../screens/Categories";
import {
  Button,
  Container,
  Image,
  InfoContainer,
  Like,
  LikeContainer,
  Price,
  PublishedText,
  Title,
} from "./styled";
import { Alert } from "react-native";

interface ProductProps {
  product: Product;
}

const likeImage = require("../../../../../assets/icons/like.png");

const CategoryCard = ({ product }: ProductProps) => {
  return (
    <Container activeOpacity={0.85} onPress={() => {}}>
      <Image source={{ uri: product.productImage }} />
      <InfoContainer>
        <Price>R$ {product.price}</Price>
        <Title numberOfLines={2}>{product.title}</Title>
        <LikeContainer>
          <PublishedText>
            Publicado em{"\n"}
            {product.publishedData}
          </PublishedText>
          <Button
            onPress={() => {
              Alert.alert("Liked");
            }}
            activeOpacity={0.85}
          >
            <Like source={likeImage} />
          </Button>
        </LikeContainer>
      </InfoContainer>
    </Container>
  );
};

export default CategoryCard;
