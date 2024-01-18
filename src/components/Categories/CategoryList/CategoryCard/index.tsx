import { useNavigation } from "@react-navigation/native";
import { Product } from "../../../../entities/Product";
import { PropsStack } from "../../../../routes";
import Like from "../../../common/Like";
import {
  Container,
  Image,
  Price,
  SellerLikeContainer,
  SellerName,
  TextContainer,
  Title,
} from "./styled";

interface ProductProps {
  product: Product;
}

interface ProductProps {
  product: Product;
  favorite: boolean;
}

const CategoryCard = ({ product, favorite }: ProductProps) => {
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
          <Like favorites={favorite} productId={product._id} />
        </SellerLikeContainer>
      </TextContainer>
    </Container>
  );
};

export default CategoryCard;
