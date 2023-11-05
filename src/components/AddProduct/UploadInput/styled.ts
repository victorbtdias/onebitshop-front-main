import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 90%;
  height: 50px;
  margin: 10px auto;
  border: 1px dashed ${({ theme }) => theme.colors.borderColor};
  border-radius: 5px;
  padding: 0 15px;
  background-color: ${({ theme }) => theme.colors.background};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Icon = styled.Image.attrs({
  resizeMode: "contain",
})`
  width: 30px;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: white;
  font-weight: bold;
`;
