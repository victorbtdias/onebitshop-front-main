import React from "react";
import { Dimensions, FlatList, ListRenderItem } from "react-native";
import { Container, ProductImage } from "./styled";

const { width } = Dimensions.get("window");

export interface Image {
  filename: string;
  url: string;
}

export interface CarouselProps {
  images: Image[];
}

const Carousel = ({ images }: CarouselProps) => {
  const renderItem: ListRenderItem<Image> = ({ item }) => (
    <ProductImage source={{ uri: item.url }} />
  );

  return (
    <Container>
      <FlatList
        data={images}
        keyExtractor={(item: Image) => item.url}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        horizontal
        snapToAlignment={"start"}
        scrollEventThrottle={16}
        decelerationRate={"fast"}
        snapToOffsets={[...Array(images.length)].map(
          (x, i) => i * (width * 0.8 - 30) + (i - 1) * 10
        )}
      />
    </Container>
  );
};

export default Carousel;
