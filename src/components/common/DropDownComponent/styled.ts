import styled from "styled-components/native";
import { SelectList } from "react-native-dropdown-select-list";

export const DropDownContainer = styled.View`
  width: 90%;
  margin: 10px auto;
`;

export const DropDown = styled(SelectList).attrs({
  boxStyles: {
    maxWidth: "100%",
    minWidth: "100%",
    backgroundColor: "#171717",
    borderRadius: 5,
    paddingLeft: 10,
  },
  inputStyles: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  dropdownStyles: {
    maxWidth: "100%",
    minWidth: "100%",
    maxHeight: 140,
    marginTop: 20,
    backgroundColor: "#171717",
  },
  dropdownTextStyles: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  disabledItemStyles: {
    backgroundColor: "#171717",
  },
})``;

export const ArrowIcon = styled.Image.attrs({
  resizeMode: "contain",
})`
  width: 26px;
  height: 26px;
`;
