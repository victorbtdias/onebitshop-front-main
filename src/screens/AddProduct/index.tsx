import React, { useState, useEffect } from "react";
import {
  Container,
  DescriptionContainer,
  Division,
  Input,
  InputContainer,
} from "./styled";
import DefaultTitle from "../../components/common/DefaultTitle";
import DropDownComponent from "../../components/common/DropDownComponent";
import DefaultButton from "../../components/common/DefaultButton";
import UploadInput from "../../components/AddProduct/UploadInput";
import { ImagePickerAsset } from "expo-image-picker/build/ImagePicker.types";
import NavBar from "../../components/common/NavBar";

const Address = [
  { value: "Endereço 1" },
  { value: "Endereço 2" },
  { value: "Endereço 3" },
  { value: "Endereço 4" },
];

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

const AddProduct = () => {
  const [fields, setFields] = useState({
    title: "",
    price: "",
    description: "",
    images: [{}],
    category: "",
    addressId: "",
  });
  const [category, setCategory] = useState("");
  const [address, setAddress] = useState("");
  const [images, setImages] = useState<ImagePickerAsset[]>([]);

  const handleSubmitProduct = () => {
    console.log(fields);
  };

  useEffect(() => {
    setFields({
      ...fields,
      images: images,
      category: category,
      addressId: address,
    });
  }, [images, category, address]);

  return (
    <>
      <Container>
        <DefaultTitle title="CADASTRO DO ANÚNCIO" fontSize={18} />
        <InputContainer>
          <Input
            placeholder="Título"
            value={fields.title}
            onChangeText={(val) => {
              setFields({
                ...fields,
                title: val,
              });
            }}
          />
        </InputContainer>
        <InputContainer>
          <Input
            placeholder="Preço"
            value={fields.price}
            onChangeText={(val) => {
              setFields({
                ...fields,
                price: val,
              });
            }}
            keyboardType="numeric"
          />
        </InputContainer>
        <DescriptionContainer>
          <Input
            placeholder="Descrição"
            value={fields.description}
            onChangeText={(val) => {
              setFields({
                ...fields,
                description: val,
              });
            }}
          />
        </DescriptionContainer>
        <UploadInput images={images} setImages={setImages} />
        <DropDownComponent
          data={Category}
          placeholder="Selecione a categoria"
          setSelected={setCategory}
        />
        <DropDownComponent
          data={Address}
          placeholder="Selecione o endereço"
          setSelected={setAddress}
        />
        <DefaultButton
          buttonText="CADASTRAR E PUBLICAR"
          buttonHandle={handleSubmitProduct}
          buttonType="primary"
          marginVertical={20}
        />
        <Division>ou</Division>
        <DefaultButton
          buttonText="SALVAR COMO RASCUNHO"
          buttonHandle={handleSubmitProduct}
          buttonType="secondary"
          marginVertical={20}
        />
      </Container>
      <NavBar />
    </>
  );
};

export default AddProduct;
