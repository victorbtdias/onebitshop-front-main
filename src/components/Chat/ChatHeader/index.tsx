import { useState } from "react";
import {
  Container,
  ModalButton,
  ModalContainer,
  ModalImage,
  ModalOverlay,
  ModalText,
  Row,
  SellerName,
} from "./styled";
import BackArrow from "../../common/BackArrow";
import { Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../../routes";

const modalImg = require("../../../../assets/icons/dots.png");

const ChatHeader = ({ sellerName, product }: any) => {
  const navigation = useNavigation<PropsStack>();
  const [modalVisible, setModalVisible] = useState(false);

  const handleToggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleSellerProfile = () => {
    navigation.navigate("SellerProfile");
  };

  const handleFeedback = () => {
    navigation.navigate("Feedback");
  };

  const handleDenounce = () => {
    navigation.navigate("Denounce");
  };

  return (
    <Container>
      <Row>
        <BackArrow marginLeft={0} />
        <SellerName>{sellerName}</SellerName>
        <ModalButton onPress={handleToggleModal}>
          <ModalImage source={modalImg} />
        </ModalButton>
        <Modal animationType="fade" transparent={true} visible={modalVisible}>
          <ModalOverlay onPress={handleToggleModal} activeOpacity={1}>
            <ModalContainer>
              <ModalText onPress={handleSellerProfile}>Ver Perfil</ModalText>
              <ModalText>Deletar Conversa</ModalText>
              <ModalText onPress={handleFeedback}>Avaliar</ModalText>
              <ModalText onPress={handleDenounce}>Denunciar</ModalText>
            </ModalContainer>
          </ModalOverlay>
        </Modal>
      </Row>
    </Container>
  );
};

export default ChatHeader;
