import { useNavigation } from "@react-navigation/native";
import { AirbnbRating } from "react-native-ratings";
import { PropsStack } from "../../../routes";
import { DefaultText } from "../../common/ProfileInfo/styled";
import { Button, Container, Name, SeeProfile, SellerContainer } from "./styled";

const SellerInfo = () => {
  const navigation = useNavigation<PropsStack>();

  const Rate = 3;

  return (
    <Container>
      <SellerContainer>
        <Name>Lucas Queiroga</Name>
        {!Rate ? (
          <DefaultText
            onPress={() => {
              navigation.navigate("Feedback");
            }}
          >
            Sem Avaliações. Avalie aqui!
          </DefaultText>
        ) : (
          <Button
            onPress={() => {
              navigation.navigate("Feedback");
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
