import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { Messages } from "../../../../entities/Messages";
import {
  ReceiverMsg,
  ReceiverMsgContainer,
  SenderMsg,
  SenderMsgContainer,
} from "./styled";

interface Props {
  item: Messages;
}

const MessageCard = ({ item }: Props) => {
  const [senderId, setSenderId] = useState("");

  const handleGetUser = async () => {
    const user = await AsyncStorage.getItem("user");
    const { _id } = JSON.parse(user || "");

    setSenderId(_id);
  };

  useEffect(() => {
    handleGetUser();
  }, []);

  return (
    <>
      {item.sender === senderId ? (
        <SenderMsgContainer>
          <SenderMsg>{item.content}</SenderMsg>
        </SenderMsgContainer>
      ) : (
        <ReceiverMsgContainer>
          <ReceiverMsg>{item.content}</ReceiverMsg>
        </ReceiverMsgContainer>
      )}
    </>
  );
};

export default MessageCard;
