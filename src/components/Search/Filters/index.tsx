import React, { useState } from "react";
import { Modal } from "react-native";
import ComplementFilters from "./ComplementFilters";
import {
  Bold,
  Container,
  FiltersContainer,
  FiltersIcon,
  FiltersText,
  ModalContainer,
  ModalOverlay,
  ModalText,
  OrderText,
} from "./styled";

const filtersIcon = require("../../../../assets/icons/filtrar.png");

const Filters = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [filterText, setFilterText] = useState("Mais recente");
  const [showFilters, setShowFilters] = useState(false);

  const handleBigestPrice = async () => {
    setFilterText("Maior preço");
    setModalVisible(false);
  };

  const handleLowestPrice = async () => {
    setFilterText("Menor preço");
    setModalVisible(false);
  };

  const handleNewest = async () => {
    setFilterText("Mais recente");
    setModalVisible(false);
  };

  return (
    <>
      <Container>
        <OrderText
          onPress={() => {
            setModalVisible(true);
          }}
        >
          Ordernar por <Bold>{filterText}</Bold>
        </OrderText>
        <Modal animationType="fade" transparent={true} visible={modalVisible}>
          <ModalOverlay
            onPress={() => {
              setModalVisible(false);
            }}
            activeOpacity={1}
          >
            <ModalContainer>
              <ModalText onPress={handleBigestPrice}>Maior Preço</ModalText>
              <ModalText onPress={handleLowestPrice}>Menor Preço</ModalText>
              <ModalText onPress={handleNewest}>Mais recente</ModalText>
            </ModalContainer>
          </ModalOverlay>
        </Modal>
        <FiltersContainer
          onPress={() => {
            setShowFilters(!showFilters);
          }}
        >
          <FiltersIcon source={filtersIcon} />
          <FiltersText>Filtrar</FiltersText>
        </FiltersContainer>
      </Container>
      {!showFilters ? null : <ComplementFilters />}
    </>
  );
};

export default Filters;
