import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home_Screen_Patient from "./screens/Home_Screen_Patient";
import Home from "./screens/Home";
import Page_2 from "./screens/Page_2";
import Page_sing_Patient from "./screens/Page_sing_Patient";
import Page_sing_Doctor from "./screens/Page_sing_Doctor";
import Page_Login_Patient from "./screens/Page_Login_Patient";
import Page_Login_Doctor from "./screens/Page_Login_Doctor";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen
          name="Home_Screen_Patient"
          component={Home_Screen_Patient}
        />
        <Stack.Screen name="Page_2" component={Page_2} />
        <Stack.Screen name="Page_sing_Patient" component={Page_sing_Patient} />
        <Stack.Screen name="Page_sing_Doctor" component={Page_sing_Doctor} />
        <Stack.Screen name="Page_Login_Doctor" component={Page_Login_Doctor} />
        <Stack.Screen
          name="Page_Login_Patient"
          component={Page_Login_Patient}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
