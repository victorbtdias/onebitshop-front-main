import React, { useState } from "react";
import {
  Container,
  EditButton,
  EditButtonContainer,
  EditImage,
} from "./styled";
import FieldsDisabled from "./FieldsDisabled";
import FieldsAbled from "./FieldsAbled";

const edit = require("../../../../assets/icons/edit.png");

const Form = () => {
  const [editable, setEditable] = useState(false);

  const handleToggleEditable = () => {
    setEditable(!editable);
  };

  return (
    <Container>
      <EditButtonContainer>
        <EditButton onPress={handleToggleEditable}>
          <EditImage source={edit} />
        </EditButton>
      </EditButtonContainer>
      {!editable ? <FieldsDisabled /> : <FieldsAbled />}
    </Container>
  );
};

export default Form;
