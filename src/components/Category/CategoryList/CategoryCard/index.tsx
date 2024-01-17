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
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../../../routes";
import { Product } from "../../../../entities/Product";
import getDate from "../../../../utils/getDate";

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
    <Container activeOpacity={0.85} onPress={handleProduct}>
      <Image source={{ uri: product.images[0].url }} />
      <InfoContainer>
        <Price>R$ {product.price}</Price>
        <Title numberOfLines={2}>{product.name}</Title>
        <LikeContainer>
          <PublishedText>
            Publicado em{"\n"}
            {getDate(product.createdAt)}
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
