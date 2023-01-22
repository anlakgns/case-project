import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Countries, Home } from "../screens";

export type StackParamList = {
  Home: undefined; // params type - don't have any
  Countries: undefined; // params type - don't have any
};

const Stack = createNativeStackNavigator<StackParamList>();
export const AppRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Countries" component={Countries} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
