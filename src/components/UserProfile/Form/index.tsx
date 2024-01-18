import React, { useState } from "react";
import {
  Container,
  EditButton,
  EditButtonContainer,
  EditImage,
} from "./styled";
import FieldsDisabled from "./FieldsDisabled";
import FieldsAbled from "./FieldsAbled";
import { User } from "../../../entities/User";

const edit = require("../../../../assets/icons/edit.png");

interface Props {
  userInfo: User;
}

const Form = ({ userInfo }: Props) => {
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
      {!editable ? (
        <FieldsDisabled userInfo={userInfo} />
      ) : (
        <FieldsAbled userInfo={userInfo} />
      )}
    </Container>
  );
};

export default Form;
