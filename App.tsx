import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { AppRoutes } from "./routes";
import { GlobalStyles } from "./theme";

export default function App() {
  return (
    <View style={GlobalStyles.container}>
      <StatusBar />
      <AppRoutes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
