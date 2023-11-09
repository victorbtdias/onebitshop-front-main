import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../../../routes";
import {
  Container,
  Image,
  InfoContainer,
  LikeContainer,
  Price,
  PublishedText,
  SellerContainer,
  SellerName,
  Title,
  TrashButton,
  TrashImage,
} from "./styled";

const trashIcon = require("../../../../../assets/icons/trash.png");

const ChatCard = ({ data }: any) => {
  const navigation = useNavigation<PropsStack>();

  return (
    <Container activeOpacity={0.85} onPress={() => {}}>
      <Image source={{ uri: data.product.images[0].url }} />
      <InfoContainer>
        <Price>R$ {data.product.price}</Price>
        <Title numberOfLines={2}>{data.product.name}</Title>
        <LikeContainer>
          <SellerContainer>
            <PublishedText>
              Publicado em {data.product.createdAt} por:
            </PublishedText>
            <SellerName>{data.seller}</SellerName>
          </SellerContainer>
          <TrashButton onPress={() => {}} activeOpacity={0.85}>
            <TrashImage source={trashIcon} />
          </TrashButton>
        </LikeContainer>
      </InfoContainer>
    </Container>
  );
};

export default ChatCard;
