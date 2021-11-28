import { Platform } from "react-native";
import colors from "./colors";

export default {
  colors,
  text: {
    color: colors.lightGrey,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};
