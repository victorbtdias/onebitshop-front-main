import { View, FlatList, ListRenderItem } from "react-native";
import { Product } from "../../../screens/Categories";
import CategoryCard from "./CategoryCard";

interface Props {
  products: Product[];
}

const CategoryList = ({ products }: Props) => {
  const renderItem: ListRenderItem<Product> = ({ item }) => (
    <CategoryCard product={item} />
  );

  return (
    <FlatList
      data={products}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default CategoryList;
