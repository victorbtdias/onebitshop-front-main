import { Category } from "../../../screens/Categories";
import CategoryCard from "./CategoryCard";
import { Container, SeeMore, Title, TitleContainer } from "./styled";
import { FlatList, ListRenderItem } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../../routes";
import { Product } from "../../../entities/Product";

interface CategoryProps {
  category: Category;
}

const CategoryList = ({ category }: CategoryProps) => {
  const navigation = useNavigation<PropsStack>();

  const renderItem: ListRenderItem<Product> = ({ item }) => (
    <CategoryCard product={item} key={item._id} />
  );

  return (
    <Container>
      <TitleContainer>
        <Title>{category._id}</Title>
        <SeeMore
          onPress={() => {
            navigation.navigate("Category", {
              _id: category._id,
              products: category.products,
            });
          }}
        >
          Ver mais
        </SeeMore>
      </TitleContainer>
      <FlatList
        data={category.products}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  );
};

export default CategoryList;
