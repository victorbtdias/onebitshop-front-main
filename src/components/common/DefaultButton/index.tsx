import React from "react";
import { ButtonContainer, ButtonText } from "./styled";

type props = {
  buttonText: string;
  buttonHandle: Function;
  buttonType: string;
  marginVertical: number;
};

const DefaultButton = ({
  buttonText,
  buttonHandle,
  buttonType,
  marginVertical,
}: props) => {
  return (
    <ButtonContainer
      onPress={() => {
        buttonHandle();
      }}
      type={buttonType}
      marginVertical={marginVertical}
    >
      <ButtonText>{buttonText}</ButtonText>
    </ButtonContainer>
  );
};

export default DefaultButton;
