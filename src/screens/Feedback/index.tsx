import React from "react";
import { Container, FeedbackText } from "./styled";
import DefaultTitle from "../../components/common/DefaultTitle";
import ProfileInfo from "../../components/common/ProfileInfo";
import NavBar from "../../components/common/NavBar";
import { AirbnbRating } from "react-native-ratings";
import DefaultButton from "../../components/common/DefaultButton";

const Feedback = () => {
  return (
    <Container>
      <DefaultTitle title="AVALIAR" fontSize={20} />
      <ProfileInfo />
      <FeedbackText>
        Dê sua nota de 1 a 5, sendo {"\n"}1 estrela ruim e 5 estrelas exclente.
      </FeedbackText>
      <AirbnbRating
        selectedColor="#5F96ED"
        showRating={false}
        size={40}
        defaultRating={0}
      />
      <DefaultButton
        buttonText={"ENVIAR AVALIAÇÃO"}
        buttonHandle={() => {}}
        buttonType={"primary"}
        marginVertical={80}
      />
      <NavBar />
    </Container>
  );
};

export default Feedback;
