import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { PropsStack } from "../../../routes";
import { Container, Input, InputContainer, Logo, Search } from "./styled";

const logoImage = require("../../../../assets/images/horizontal-logo.png");
const search = require("../../../../assets/icons/search.png");

const Header = () => {
  const navigation = useNavigation<PropsStack>();
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    navigation.navigate("Search", {
      query: searchValue,
    });
    setSearchValue("");
  };

  return (
    <Container>
      <Logo source={logoImage} />
      <InputContainer>
        <Input
          value={searchValue}
          onChangeText={setSearchValue}
          placeholder="Pesquisa"
          placeholderTextColor="#C0C0C1"
          onSubmitEditing={() => {
            handleSearch();
          }}
        />
        <Search source={search} />
      </InputContainer>
    </Container>
  );
};

export default Header;
