import ChatList from "../../components/AllChats/ChatList";
import DefaultTitle from "../../components/common/DefaultTitle";
import { Container } from "./styled";

const AllChats = () => {
  return (
    <>
      <Container>
        <DefaultTitle title="CONVERSAS" fontSize={20} />
        <ChatList />
      </Container>
    </>
  );
};

export default AllChats;
