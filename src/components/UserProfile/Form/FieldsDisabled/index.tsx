import React, { useState } from "react";
import DropDownComponent from "../../../common/DropDownComponent";
import { InputDisabled, PlaceholderDisabled } from "./styled";

const FieldsDisabled = () => {
  const [select, setSelect] = useState("");

  const Data = [{ value: "Endereço de teste", disabled: true }];

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
      <DropDownComponent
        placeholder="Seus endereços"
        setSelected={setSelect}
        data={Data}
      />
      <InputDisabled>
        <PlaceholderDisabled>Senha</PlaceholderDisabled>
      </InputDisabled>
    </>
  );
};

export default FieldsDisabled;
