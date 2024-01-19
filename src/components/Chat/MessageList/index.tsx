import { FlatList, ListRenderItem } from "react-native";
import { Messages } from "../../../entities/Messages";
import MessageCard from "./MessageCard";

interface Props {
  messages: Messages[];
}

const MessageList = ({ messages }: Props) => {
  const renderItem: ListRenderItem<Messages> = ({ item }) => (
    <MessageCard item={item} />
  );

  return (
    <FlatList
      data={messages}
      inverted
      keyExtractor={(item, index) => item._id + index.toString()}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingTop: 20 }}
    />
  );
};

export default MessageList;
