import { useNavigation } from "@react-navigation/native";
import { Product } from "../../../../entities/Product";
import { PropsStack } from "../../../../routes";
import { Container, Image, InfoContainer, SubTitle, Title } from "./styled";

interface Props {
  product: Product;
}

const AdCard = ({ product }: Props) => {
  const navigation = useNavigation<PropsStack>();

  return (
    <Container
      onPress={() => {
        navigation.navigate("Product", {
          ...product,
        });
      }}
    >
      <Image source={{ uri: product.images[0].url }} />
      <InfoContainer>
        <Title numberOfLines={2}>{product.name}</Title>
        <SubTitle>R$ {product.price} - Ver Anúncio</SubTitle>
      </InfoContainer>
    </Container>
  );
};

export default AdCard;
