import { useNavigation } from "@react-navigation/native";
import { Chats } from "../../../../entities/Messages";
import { PropsStack } from "../../../../routes";
import getDate from "../../../../utils/getDate";
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

interface Props {
  data: Chats;
}

const ChatCard = ({ data }: Props) => {
  const navigation = useNavigation<PropsStack>();

  return (
    <Container
      activeOpacity={0.85}
      onPress={() => {
        navigation.navigate("Chat", {
          _id: data._id,
          product: data.product,
          sellerName: data.seller.name,
          sellerId: data.seller._id,
          buyerId: data.buyer._id,
          messages: data.messages,
        });
      }}
    >
      <Image source={{ uri: data.product?.images[0].url }} />
      <InfoContainer>
        <Price>R$ {data.product?.price}</Price>
        <Title numberOfLines={2}>{data.product?.name}</Title>
        <SellerTrashContainer>
          <SellerContainer>
            <PublishedText>
              Publicado em {getDate(data.product?.createdAt)} por:
            </PublishedText>
            <SellerName>{data.seller.name}</SellerName>
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
