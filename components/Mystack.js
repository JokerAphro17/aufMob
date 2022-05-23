import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../View/Login";
import Signup from "../View/Signup";
import Home from "./Drawer";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "CONNEXION" }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ title: "INSCRIPTION" }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            navigationOptions: { headerShown: false, header: null },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack;
