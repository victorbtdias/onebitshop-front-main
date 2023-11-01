import React from "react";
import { Container, EmptyView, Title } from "./styled";
import BackArrow from "../BackArrow";

interface TitleProps {
  fontSize: number;
  title: string;
}

const DefaultTitle = ({ fontSize, title }: TitleProps) => {
  return (
    <Container>
      <BackArrow marginLeft={0} />
      <Title fontSize={fontSize}>{title}</Title>
      <EmptyView />
    </Container>
  );
};

export default DefaultTitle;
