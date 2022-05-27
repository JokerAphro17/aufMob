import React from "react";
import MyStack from "./components/Mystack";
import CouponJour from "./View/CouponJour";
import Drawer1 from "./components/Drawer1";
import { NavigationContainer } from "@react-navigation/native";

const App = () => (
  <>
    {/* <MyStack /> */}
    {/* <CouponJour /> */}
    <NavigationContainer>
      <Drawer1 />
    </NavigationContainer>
  </>
);

export default App;
