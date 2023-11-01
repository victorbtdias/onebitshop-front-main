import styled from "styled-components/native";

type TitleProps = {
  fontSize: number;
};

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 20px;
  margin-top: 0;
  margin-bottom: 0;
`;

export const Title = styled.Text<TitleProps>`
  font-size: ${(props) => props.fontSize}px;
  color: ${({ theme }) => theme.colors.primaryText};
  font-weight: bold;
`;

export const EmptyView = styled.View`
  width: 40px;
  height: 40px;
`;
