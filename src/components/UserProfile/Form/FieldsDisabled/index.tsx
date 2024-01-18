import React, { useState } from "react";
import { User } from "../../../../entities/User";
import {
  ArrowIconDisabled,
  DropDownContainerDisabled,
  DropDownDisabled,
  InputDisabled,
  PlaceholderDisabled,
} from "./styled";

const arrowIcon = require("../../../../../assets/icons/arrow-down.png");

interface Props {
  userInfo: User;
}

const FieldsDisabled = ({ userInfo }: Props) => {
  return (
    <>
      <InputDisabled>
        <PlaceholderDisabled>{userInfo.name}</PlaceholderDisabled>
      </InputDisabled>
      <InputDisabled>
        <PlaceholderDisabled>{userInfo.email}</PlaceholderDisabled>
      </InputDisabled>
      <InputDisabled>
        <PlaceholderDisabled>{userInfo.phone}</PlaceholderDisabled>
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
