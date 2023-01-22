import { StyleSheet, Platform } from "react-native";
import { Colors } from "../constants";
import { verticalScale, horizontalScale, moderateScale } from "../utils";

export const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
    paddingHorizontal: horizontalScale(15),
    paddingBottom: verticalScale(5),
    paddingTop: Platform.OS === "android" ? 25 : 0, // SafeAreView doesn't work well with android sometimes
  },
  input: {
    height: verticalScale(60),
  },
  screenButton: {
    height: verticalScale(50),
    backgroundColor: Colors.Purple,
    borderRadius: 9999,
    justifyContent: "center",
    alignItems: "center",
  },
  screenButtonText: {
    color: Colors.White,
    fontSize: moderateScale(24),
    fontWeight: "500",
  },
  headline: {
    fontSize: moderateScale(24),
    fontWeight: "600",
    color: Colors.Purple,
  },
  disabledButton: {
    opacity: 0.6,
  },
  errorText: {
    color: Colors.Error,
  },
});
