import React, { useState } from "react";
import {
  ArrowIconDisabled,
  DropDownContainerDisabled,
  DropDownDisabled,
  InputDisabled,
  PlaceholderDisabled,
} from "./styled";

const arrowIcon = require("../../../../../assets/icons/arrow-down.png");

const FieldsDisabled = () => {
  return (
    <>
      <InputDisabled>
        <PlaceholderDisabled>Lucas Queiroga</PlaceholderDisabled>
      </InputDisabled>
      <InputDisabled>
        <PlaceholderDisabled>lucasqueiroga@email.com</PlaceholderDisabled>
      </InputDisabled>
      <InputDisabled>
        <PlaceholderDisabled>(81) 9 9999-9999</PlaceholderDisabled>
      </InputDisabled>
      <DropDownContainerDisabled pointerEvents="none">
        <DropDownDisabled
          setSelected={() => {}}
          data={[]}
          placeholder="Seus Endereços"
          arrowicon={<ArrowIconDisabled source={arrowIcon} />}
        />
      </DropDownContainerDisabled>
      <InputDisabled>
        <PlaceholderDisabled>Senha</PlaceholderDisabled>
      </InputDisabled>
    </>
  );
};

export default FieldsDisabled;
