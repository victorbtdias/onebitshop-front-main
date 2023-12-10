import { useNavigation } from "@react-navigation/native";
import { AirbnbRating } from "react-native-ratings";
import useAuth from "../../../hook/useAuth";
import { PropsStack } from "../../../routes";
import { DefaultText } from "../../common/ProfileInfo/styled";
import { Button, Container, Name, SeeProfile, SellerContainer } from "./styled";

const SellerInfo = () => {
  const navigation = useNavigation<PropsStack>();
  const { token } = useAuth();

  const Rate = 3;

  return (
    <Container>
      <SellerContainer>
        <Name>Lucas Queiroga</Name>
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
              starContainerStyle={{
                paddingTop: 4,
              }}
            />
          </Button>
        )}
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
