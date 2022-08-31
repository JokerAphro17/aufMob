import React from "react";
import MyStack from "./components/Mystack";
import { AuthProvider } from "./utilities/context/authContext";
import { RequestsProvider } from "./utilities/context/requestsContext";
import { NativeBaseProvider } from "native-base";

const App = () => {
  return (
    <AuthProvider>
      <RequestsProvider>
        <NativeBaseProvider>
          <MyStack />
        </NativeBaseProvider>
      </RequestsProvider>
    </AuthProvider>
  );
};
export default App;
