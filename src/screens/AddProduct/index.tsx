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
import addressService from "../../services/addressService";
import { Address } from "../../entities/User";

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
  const [addressId, setAddressId] = useState("");
  const [address, setAddress] = useState([]);
  const [images, setImages] = useState<ImagePickerAsset[]>([]);

  const handleGetAddress = async () => {
    const res = await addressService.getAddress();

    const value = res.data.map((address: Address) => {
      return {
        key: address._id,
        value: `${address.street} Nº ${address.number}`,
      };
    });

    setAddress(value);
  };

  const handleSubmitProduct = () => {
    console.log(fields);
  };

  useEffect(() => {
    setFields({
      ...fields,
      images: images,
      category: category,
      addressId: addressId,
    });
  }, [images, category, address]);

  useEffect(() => {
    handleGetAddress();
  }, []);

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
          data={address}
          placeholder="Selecione o endereço"
          setSelected={setAddressId}
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
