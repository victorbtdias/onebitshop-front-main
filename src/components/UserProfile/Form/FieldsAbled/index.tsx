import DefaultButton from "../../../common/DefaultButton";
import { InputContainer } from "../styled";
import { Input } from "./styled";
import { Alert } from "react-native";
import DropDownComponent from "../../../common/DropDownComponent";
import { useEffect, useState } from "react";
import { Address, User } from "../../../../entities/User";
import addressService from "../../../../services/addressService";
import Loader from "../../../../screens/Loader";
import profileService from "../../../../services/profileService";
import useAuth from "../../../../hook/useAuth";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../../../routes";

interface Props {
  userInfo: User;
}

const FieldsAbled = ({ userInfo }: Props) => {
  const { logout } = useAuth();
  const navigation = useNavigation<PropsStack>();

  const [fields, setFields] = useState({
    name: "",
    email: "",
    phone: "",
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const [address, setAddress] = useState([]);
  const [selected, setSelected] = useState("");
  const [loading, setLoading] = useState(true);

  const handleSetInfos = async () => {
    const res = await addressService.getAddress();

    const value = res.data.map((address: Address) => {
      return { value: `${address.street} Nº${address.number}`, disabled: true };
    });

    setAddress(value);
    setFields({
      ...fields,
      name: userInfo.name,
      email: userInfo.email,
      phone: userInfo.phone,
    });
    setLoading(false);
  };

  const handleUpdateInfo = async () => {
    const res = await profileService.updateUserProfile(fields);

    if (res.status === 400) {
      Alert.alert("Esse e-mail pertence a outra conta");
      return;
    }

    if (fields.email !== userInfo.email) {
      logout();
    }

    navigation.navigate("Home");

    Alert.alert("Informações atualizadas com sucesso!");
  };

  useEffect(() => {
    handleSetInfos();
  }, []);

  return (
    <>
      {!loading ? (
        <>
          <InputContainer>
            <Input
              value={fields.name}
              onChangeText={(val) => {
                setFields({
                  ...fields,
                  name: val,
                });
              }}
            />
          </InputContainer>
          <InputContainer>
            <Input
              value={fields.phone}
              onChangeText={(val) => {
                setFields({
                  ...fields,
                  phone: val,
                });
              }}
            />
          </InputContainer>
          <InputContainer>
            <Input
              value={fields.email}
              onChangeText={(val) => {
                setFields({
                  ...fields,
                  email: val,
                });
              }}
            />
          </InputContainer>
          <DropDownComponent
            placeholder="Seus endereços"
            setSelected={setSelected}
            data={address}
            saveMethod="value"
          />
          <InputContainer>
            <Input
              placeholder="Senha"
              placeholderTextColor="#C0C0C1"
              secureTextEntry
              onChangeText={(val) => {
                setFields({
                  ...fields,
                  currentPassword: val,
                });
              }}
            />
          </InputContainer>
          <InputContainer>
            <Input
              placeholder="Nova senha"
              placeholderTextColor="#C0C0C1"
              secureTextEntry
              onChangeText={(val) => {
                setFields({
                  ...fields,
                  newPassword: val,
                });
              }}
            />
          </InputContainer>
          <InputContainer>
            <Input
              placeholder="Confirmar Senha"
              placeholderTextColor="#C0C0C1"
              secureTextEntry
              onChangeText={(val) => {
                setFields({
                  ...fields,
                  confirmNewPassword: val,
                });
              }}
            />
          </InputContainer>
          <DefaultButton
            buttonText="Salvar Alterações"
            buttonHandle={handleUpdateInfo}
            buttonType="primary"
            marginVertical={10}
          />
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default FieldsAbled;
