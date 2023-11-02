import styled from "styled-components/native";

export const Input = styled.TextInput`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.primaryText};
  font-weight: bold;
`;

export const AddressText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin: 15px 0px;
  text-align: center;
  color: ${({ theme }) => theme.colors.primaryText};
`;
