import React, { useState, useContext, SetStateAction } from "react";
import { QueryContext } from "../../../../contexts/QueryContext";
import DropDownComponent from "../../../common/DropDownComponent";

import {
  ApllyButton,
  ButtonsContainer,
  ButtonText,
  CleanButton,
  Container,
  Input,
  LocationInputContainer,
  PriceContainer,
  PriceInputContainer,
  Title,
} from "./styled";

const Category = [
  { value: "Eletrônicos" },
  { value: "Eletrodomésticos" },
  { value: "Moda e Acessórios" },
  { value: "Pets" },
  { value: "Brinquedos e Jogos" },
  { value: "Casa e Jardim" },
  { value: "Esporte e Lazer" },
  { value: "Automóveis e Veículos" },
];

interface Props {
  setShowFilters: React.Dispatch<SetStateAction<boolean>>;
}

const ComplementFilters = ({ setShowFilters }: Props) => {
  const [category, setCategory] = useState("");
  const queryContext = useContext(QueryContext);
  const [fields, setFields] = useState({
    minPrice: "",
    maxPrice: "",
    address: "",
  });

  const handleMinPrice = () => {
    queryContext.addFilter(`minPrice=${fields.minPrice}`);
  };

  const handleMaxPrice = () => {
    queryContext.addFilter(`maxPrice=${fields.maxPrice}`);
  };

  const handleCategory = () => {
    queryContext.addFilter(`category=${category}`);
  };

  const handleAddress = () => {
    queryContext.addFilter(`location=${fields.address}`);
  };

  const handleSearchFiltered = () => {
    if (fields.minPrice) {
      handleMinPrice();
    }
    if (fields.maxPrice) {
      handleMaxPrice();
    }
    if (category) {
      handleCategory();
    }
    if (fields.address) {
      handleAddress();
    }

    setShowFilters(false);
  };

  const handleCleanFilters = () => {
    queryContext.resetFilter();
    setShowFilters(false);
  };

  return (
    <Container>
      <Title>VALOR</Title>
      <PriceContainer>
        <PriceInputContainer>
          <Input
            placeholder="Mínimo"
            placeholderTextColor="white"
            keyboardType="numeric"
            value={fields.minPrice}
            onChangeText={(val) => {
              setFields({ ...fields, minPrice: val });
            }}
            style={{
              textAlign: "center",
            }}
          />
        </PriceInputContainer>
        <PriceInputContainer>
          <Input
            placeholder="Máximo"
            placeholderTextColor="white"
            keyboardType="numeric"
            value={fields.maxPrice}
            onChangeText={(val) => {
              setFields({ ...fields, maxPrice: val });
            }}
            style={{
              textAlign: "center",
            }}
          />
        </PriceInputContainer>
      </PriceContainer>
      <Title>LOCALIZAÇÃO</Title>
      <LocationInputContainer>
        <Input
          placeholder="Bairro, Cidade e/ou Estado (Apenas um por vez)"
          placeholderTextColor="white"
          value={fields.address}
          onChangeText={(val) => {
            setFields({
              ...fields,
              address: val,
            });
          }}
        />
      </LocationInputContainer>
      <Title>CATEGORIA</Title>
      <DropDownComponent
        data={Category}
        placeholder="Selecione a categoria"
        setSelected={setCategory}
        saveMethod="value"
      />
      <ButtonsContainer>
        <CleanButton onPress={handleCleanFilters}>
          <ButtonText>LIMPAR</ButtonText>
        </CleanButton>
        <ApllyButton onPress={handleSearchFiltered}>
          <ButtonText>APLICAR</ButtonText>
        </ApllyButton>
      </ButtonsContainer>
    </Container>
  );
};

export default ComplementFilters;
