import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import { GlobalStyles } from "../theme";

// This component is created considered reusability for all screen bottom button.

type ScreenButtonProps = {
  text: string;
} & TouchableOpacityProps;

export const ScreenButton: React.FC<ScreenButtonProps> = ({
  text,
  ...rest
}) => {
  return (
    <TouchableOpacity
      {...rest}
      accessibilityLabel="Next Button"
      style={[
        GlobalStyles.screenButton,
        rest.disabled && GlobalStyles.disabledButton,
        rest.style,
      ]}
    >
      <Text style={[GlobalStyles.screenButtonText]}>{text}</Text>
    </TouchableOpacity>
  );
};
