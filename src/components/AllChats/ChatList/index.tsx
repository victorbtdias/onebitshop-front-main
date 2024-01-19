import React, { useState } from "react";
import { NoChat } from "./styled";
import { FlatList, ListRenderItem, View } from "react-native";
import ChatCard from "./ChatCard";
import { Chats } from "../../../entities/Messages";
import { useFocusEffect } from "@react-navigation/native";
import Loader from "../../../screens/Loader";
import chatService from "../../../services/chatService";

const ChatList = () => {
  const [loading, setLoading] = useState(true);
  const [chats, setChats] = useState<Chats[]>([]);

  const renderItem: ListRenderItem<Chats> = ({ item }) => (
    <ChatCard data={item} />
  );

  const handleGetChats = async () => {
    const res = await chatService.getChats();

    setChats(res.data);

    setLoading(false);
  };

  useFocusEffect(
    React.useCallback(() => {
      handleGetChats();
    }, [])
  );
  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {chats.length <= 0 ? (
        <NoChat>Você não tem chats no momento</NoChat>
      ) : (
        <FlatList
          data={chats}
          keyExtractor={(item) => item._id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 80 }}
        />
      )}
    </>
  );
};

export default ChatList;
