import React from "react";
import MyStack from "./components/Mystack";
import CouponJour from "./View/CouponJour";
import Drawer1 from "./components/Drawer1";
import { NavigationContainer } from "@react-navigation/native";
import Depot from "./View/Depot";
import VerifyEmail from "./View/VerifyEmail";
import { useState } from "react";
import Login from "./View/Login";
import { AuthProvider } from "./utilities/context/authContext";
import { RequestsProvider } from "./utilities/context/requestsContext";


const App = () => {

  
  return (
    <AuthProvider>
      <RequestsProvider>
        <MyStack/> 
      </RequestsProvider>
    </AuthProvider>

);
  }
export default App;
