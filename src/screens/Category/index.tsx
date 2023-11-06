import { NativeStackScreenProps } from "@react-navigation/native-stack";
import CategoryList from "../../components/Category/CategoryList";
import DefaultTitle from "../../components/common/DefaultTitle";
import { PropsNavigationStack } from "../../routes";
import { Container } from "./styled";

type Props = NativeStackScreenProps<PropsNavigationStack, "Category">;

const Category = ({ route }: Props) => {
  return (
    <Container>
      <DefaultTitle title={route.params._id} fontSize={20} />
      <CategoryList products={route.params.products} />
    </Container>
  );
};

export default Category;
