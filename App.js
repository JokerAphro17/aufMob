import React from "react";
import MyStack from "./components/Mystack";
import CouponJour from "./View/CouponJour";
import Drawer1 from "./components/Drawer1";
import { NavigationContainer } from "@react-navigation/native";
import Depot from "./View/Depot";
import VerifyEmail from "./View/VerifyEmail";
import { useState } from "react";
import Login from "./View/Login";
export const UserContext = React.createContext({});


const App = () => {

  const [user, setUser] = useState({});
  return (
  <UserContext.Provider value={{user, setUser}}>
     <MyStack/> 
  </UserContext.Provider>
);
  }

export default App;
