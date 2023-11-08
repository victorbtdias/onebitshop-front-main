import { useNavigation } from "@react-navigation/native";
import { AirbnbRating } from "react-native-ratings";
import { PropsStack } from "../../../routes";
import { Button, Container, Name, SeeProfile, SellerContainer } from "./styled";

const SellerInfo = () => {
  const navigation = useNavigation<PropsStack>();

  const Rate = 3;

  return (
    <Container>
      <SellerContainer>
        <Name>Lucas Queiroga</Name>
        <Button>
          <AirbnbRating
            selectedColor="#5F96ED"
            showRating={false}
            isDisabled={true}
            size={16}
            defaultRating={Rate}
            starContainerStyle={{
              marginLeft: -20,
            }}
          />
        </Button>
      </SellerContainer>
      <SeeProfile
        onPress={() => {
          navigation.navigate("SellerProfile");
        }}
      >
        Ver Perfil
      </SeeProfile>
    </Container>
  );
};

export default SellerInfo;
