import React from "react";
import {
  Button,
  Container,
  InfoContainer,
  InteractionsContainer,
  Like,
  Price,
  Share,
  SubTitle,
  SubTitleContainer,
  Title,
} from "./styled";
import BackArrow from "../../components/common/BackArrow";
import Carousel from "../../components/Product/Carousel";

const like = require("../../../assets/icons/like.png");
const share = require("../../../assets/icons/share.png");

const images = [
  {
    filename: "image1",
    url: "https://classic.exame.com/wp-content/uploads/2021/05/ps5-the-squad-foto-1.jpg?quality=70&strip=info&w=984",
  },
  {
    filename: "image2",
    url: "https://cdn.awsli.com.br/1824/1824967/produto/186131938/67bd1ea8d4.jpg",
  },
  {
    filename: "image3",
    url: "https://cdn.awsli.com.br/600x700/1734/1734513/produto/97494476/030cda119d.jpg",
  },
];

const Product = () => {
  return (
    <Container>
      <BackArrow marginLeft={30} />
      <Title>Playstation 5 com dois controles</Title>
      <SubTitleContainer>
        <SubTitle>Publicado em 10/05/23</SubTitle>
        <SubTitle>Recife, PE</SubTitle>
      </SubTitleContainer>
      <Carousel images={images} />
      <InfoContainer>
        <Price>R$ 1800</Price>
        <InteractionsContainer>
          <Button activeOpacity={0.8}>
            <Like source={like} />
          </Button>
          <Button activeOpacity={0.8}>
            <Share source={share} />
          </Button>
        </InteractionsContainer>
      </InfoContainer>
    </Container>
  );
};

export default Product;
