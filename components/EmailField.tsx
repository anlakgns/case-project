import { TextInput, HelperText } from "react-native-paper";
import { GlobalStyles } from "../theme";
import { StyleProp, TextStyle } from "react-native";
import { View } from "react-native";
import { useEffect, useState } from "react";
import { validateEmail } from "../utils";

// This component is created considered reusability.

interface EmailFieldProps {
  onChange: (v: string) => void;
  checkValid?: (v: boolean) => void;
  style?: StyleProp<TextStyle>;
}

export const EmailField: React.FC<EmailFieldProps> = ({
  onChange,
  style = {},
  checkValid,
}) => {
  const [showError, setShowError] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const isValid = validateEmail(email);
    setShowError(email ? !isValid : false);

    onChange(email);
    if (checkValid) {
      checkValid(isValid);
    }
  }, [email]);

  return (
    <View>
      <TextInput
        value={email}
        style={[GlobalStyles.input, style]}
        mode="outlined"
        label="Email"
        accessibilityLabel="Email"
        placeholder="example@example.com"
        textContentType={"emailAddress"}
        autoCapitalize="none"
        keyboardType="email-address"
        autoCorrect={false}
        onChangeText={(v) => setEmail(v)}
      />
      <HelperText type="error" visible={showError}>
        Email address is invalid!
      </HelperText>
    </View>
  );
};
