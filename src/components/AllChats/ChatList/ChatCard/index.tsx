import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../../../routes";
import {
  Container,
  Image,
  InfoContainer,
  Price,
  PublishedText,
  SellerContainer,
  SellerName,
  SellerTrashContainer,
  Title,
  TrashButton,
  TrashImage,
} from "./styled";

const trashIcon = require("../../../../../assets/icons/trash.png");

const ChatCard = ({ data }: any) => {
  const navigation = useNavigation<PropsStack>();

  return (
    <Container
      activeOpacity={0.85}
      onPress={() => {
        navigation.navigate("Chat", {
          chatInfo: data,
        });
      }}
    >
      <Image source={{ uri: data.product.images[0].url }} />
      <InfoContainer>
        <Price>R$ {data.product.price}</Price>
        <Title numberOfLines={2}>{data.product.name}</Title>
        <SellerTrashContainer>
          <SellerContainer>
            <PublishedText>
              Publicado em {data.product.createdAt} por:
            </PublishedText>
            <SellerName>{data.seller}</SellerName>
          </SellerContainer>
          <TrashButton onPress={() => {}} activeOpacity={0.85}>
            <TrashImage source={trashIcon} />
          </TrashButton>
        </SellerTrashContainer>
      </InfoContainer>
    </Container>
  );
};

export default ChatCard;
