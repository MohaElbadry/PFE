import React from "react";
import { createStackNavigator, StackView } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import Home from "./screens/Home";
import Page_2 from "./screens/Page_2";
export default function RootNavigation() {
  const stack = createStackNavigator();

  const screenOptions = {
    headerShown: false,
  };
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
        <stack.Screen name="Home" component={Home} />
        <stack.Screen name="HomeScreen" component={HomeScreen} />
        <stack.Screen name="Page_2" component={Page_2} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
