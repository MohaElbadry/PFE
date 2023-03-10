import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Doc_Home_Screeen from "./screens/Doc_Home_Screeen";
import Home from "./screens/Home";
import Page_2 from "./screens/Page_2";
import Pat_Sign from "./screens/Pat_Sign";
import Pat_Login from "./screens/Pat_Login";
import Doc_Login from "./screens/Doc_Login";
import Doc_Chat from "./screens/Doc_Chat";
import Doc_Patient_Traitment from "./screens/Doc_Patient_Traitment";
import Doc_Profile from "./screens/Doc_Profile";
import Doc_Ajout_Traitement from "./screens/Doc_Ajout_Traitement";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Doc_Home_Screeen" component={Doc_Home_Screeen} />
        <Stack.Screen name="Page_2" component={Page_2} />
        <Stack.Screen name="Pat_Sign" component={Pat_Sign} />
        <Stack.Screen name="Pat_Login" component={Pat_Login} />
        <Stack.Screen name="Doc_Login" component={Doc_Login} />
        <Stack.Screen name="Doc_Chat" component={Doc_Chat} />
        <Stack.Screen name="Doc_Profile" component={Doc_Profile} />
        <Stack.Screen
          name="Doc_Ajout_Traitement"
          component={Doc_Ajout_Traitement}
        />
        <Stack.Screen
          name="Doc_Patient_Traitment"
          component={Doc_Patient_Traitment}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/* <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      ></Tab.Navigator> */
