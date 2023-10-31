import styled from "styled-components/native";

type backProps = {
  marginLeft: number;
};

export const BackContainer = styled.TouchableOpacity``;

export const Back = styled.Image.attrs({
  resizeMode: "contain",
})<backProps>`
  width: 40px;
  margin-left: ${(props) => props.marginLeft}px;
`;
