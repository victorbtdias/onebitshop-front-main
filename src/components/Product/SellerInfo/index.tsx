import { useNavigation } from "@react-navigation/native";
import { AirbnbRating } from "react-native-ratings";
import { Product } from "../../../entities/Product";
import useAuth from "../../../hook/useAuth";
import { PropsStack } from "../../../routes";
import { DefaultText } from "../../common/ProfileInfo/styled";
import { Button, Container, Name, SeeProfile, SellerContainer } from "./styled";

interface Props {
  product: Product;
}

const SellerInfo = ({ product }: Props) => {
  const navigation = useNavigation<PropsStack>();
  const { token } = useAuth();

  const Rate = parseInt(product.seller.rating);

  return (
    <Container>
      <SellerContainer>
        <Name>{product.seller.name}</Name>
        {!Rate ? (
          <DefaultText
            onPress={() => {
              !token
                ? navigation.navigate("Login")
                : navigation.navigate("Feedback");
            }}
          >
            Sem Avaliações. Avalie aqui!
          </DefaultText>
        ) : (
          <Button
            onPress={() => {
              !token
                ? navigation.navigate("Login")
                : navigation.navigate("Feedback");
            }}
          >
            <AirbnbRating
              selectedColor="#5F96ED"
              showRating={false}
              isDisabled={true}
              size={16}
              defaultRating={Rate}
            />
          </Button>
        )}
      </SellerContainer>
      <SeeProfile
        onPress={() => {
          navigation.navigate("SellerProfile", {
            sellerId: product.seller._id,
          });
        }}
      >
        Ver Perfil
      </SeeProfile>
    </Container>
  );
};

export default SellerInfo;
