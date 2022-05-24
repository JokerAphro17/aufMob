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
      <Stack.Navigator
        options={{
          navigationOptions: { headerShown: false, header: null },
        }}
      >
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
        <Stack.Screen name="Home" component={Drawer1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack;
