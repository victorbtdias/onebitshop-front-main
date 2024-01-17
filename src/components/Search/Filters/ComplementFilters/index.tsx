import React, { useState } from "react";
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

const ComplementFilters = () => {
  const [category, setCategory] = useState("");

  return (
    <Container>
      <Title>VALOR</Title>
      <PriceContainer>
        <PriceInputContainer>
          <Input
            placeholder="Mínimo"
            placeholderTextColor="white"
            keyboardType="numeric"
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
            style={{
              textAlign: "center",
            }}
          />
        </PriceInputContainer>
      </PriceContainer>
      <Title>LOCALIZAÇÃO</Title>
      <LocationInputContainer>
        <Input
          placeholder="Bairro, Cidade e/ou Estado"
          placeholderTextColor="white"
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
        <CleanButton onPress={() => {}}>
          <ButtonText>LIMPAR</ButtonText>
        </CleanButton>
        <ApllyButton onPress={() => {}}>
          <ButtonText>APLICAR</ButtonText>
        </ApllyButton>
      </ButtonsContainer>
    </Container>
  );
};

export default ComplementFilters;
