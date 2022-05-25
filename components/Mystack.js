import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../View/Login";
import Signup from "../View/Signup";
import Drawer1 from "./Drawer1";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "CONNEXION", headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ title: "INSCRIPTION" }}
        />
        <Stack.Screen
          name="Home"
          component={Drawer1}
          options={{
            title: "AFRICAN WALLET/1XBET",
            headerLeft: () => null,
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 20,
            },
            headerTitleAlign: "center",
            headerBackVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack;
