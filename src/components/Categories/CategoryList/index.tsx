import { Category, Product } from "../../../screens/Categories";
import CategoryCard from "./CategoryCard";
import { Container, SeeMore, Title, TitleContainer } from "./styled";
import { FlatList, ListRenderItem } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../../routes";

const CategoryList = ({ category }: Category) => {
  const navigation = useNavigation<PropsStack>();

  const renderItem: ListRenderItem<Product> = ({ item }) => (
    <CategoryCard product={item} key={item.id} />
  );

  return (
    <Container>
      <TitleContainer>
        <Title>{category._id}</Title>
        <SeeMore
          onPress={() => {
            navigation.navigate("Category", {
              _id: category._id,
              products: category.product,
            });
          }}
        >
          Ver mais
        </SeeMore>
      </TitleContainer>
      <FlatList
        data={category.product}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  );
};

export default CategoryList;
