import React, { SetStateAction } from "react";
import { Container, Icon, Image, ImageContainer, Title } from "./styled";
import * as ImagePicker from "expo-image-picker";
import { Alert } from "react-native";

const uploadImage = require("../../../../assets/icons/arrow-right.png");

interface ImagesParams {
  images: ImagePicker.ImagePickerAsset[];
  setImages: React.Dispatch<SetStateAction<ImagePicker.ImagePickerAsset[]>>;
}

const UploadInput = ({ images, setImages }: ImagesParams) => {
  const handlePickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      selectionLimit: 6,
      aspect: [4, 3],
      quality: 1,
    });

    if (result.assets) {
      const images = result.assets.slice(0, 6);

      if (result.assets.length > 6) {
        Alert.alert(
          "Você excedeu o limite máximo de imagens permitido (6). Por isso, removemos as imagens adicionais que você enviou."
        );
      }

      setImages(images);
    } else {
      Alert.alert("Você não selecionou nenhuma imagem");
    }
  };

  return (
    <>
      <Container onPress={handlePickImage}>
        <Title>Adicione até 6 fotos</Title>
        <Icon source={uploadImage} />
      </Container>
      <ImageContainer>
        {images &&
          images.map((image) => {
            return <Image key={image.assetId} source={{ uri: image.uri }} />;
          })}
      </ImageContainer>
    </>
  );
};

export default UploadInput;
