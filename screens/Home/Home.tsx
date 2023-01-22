import {
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  SafeAreaView,
} from "react-native";
import { GlobalStyles } from "../../theme";
import { useState } from "react";
import { ScreenButton, EmailField } from "../../components";
import { View, Text } from "react-native";
import { moderateScale, verticalScale } from "../../utils";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamList } from "../../routes";

type HomeScreenProp = NativeStackScreenProps<StackParamList, "Home">;

export const Home: React.FC<HomeScreenProp> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setEmailValid] = useState(true);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={[GlobalStyles.container, styles.container]}>
        <View style={[styles.contentWrapper]}>
          <Text style={[GlobalStyles.headline, styles.headline]}>
            Welcome to Country App
          </Text>
          <Text style={styles.informationText}>
            Insert your email to start.
          </Text>
          <EmailField onChange={setEmail} checkValid={setEmailValid} />
        </View>
        <ScreenButton
          disabled={!email || !isEmailValid}
          text="Next"
          onPress={() => {
            navigation.push("Countries");
          }}
        />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
  },
  contentWrapper: {
    flex: 1,
    justifyContent: "center",
    marginBottom: verticalScale(30),
  },
  headline: {
    marginBottom: verticalScale(6),
  },
  informationText: {
    fontSize: moderateScale(16),
    opacity: 0.7,
    marginBottom: verticalScale(20),
  },
});
