import ChatList from "../../components/AllChats/ChatList";
import DefaultTitle from "../../components/common/DefaultTitle";
import NavBar from "../../components/common/NavBar";
import { Container } from "./styled";

const AllChats = () => {
  return (
    <>
      <Container>
        <DefaultTitle title="CONVERSAS" fontSize={20} />
        <ChatList />
        <NavBar />
      </Container>
    </>
  );
};

export default AllChats;
