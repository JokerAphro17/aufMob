import { React, useState } from "react";

import { Text, View, StyleSheet, Button } from "react-native";
import Login from "./Login";
import SignUp from "./SignUp";

const ConnectionModal = ({ params }) => {
  const [Signup, setSignUp] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Button
          title="S'inscrire"
          onPress={() => {
            setSignUp(true);
          }}
        />
        <Button
          title="Se connecter"
          onPress={() => {
            setSignUp(false);
          }}
        />
      </View>
      {Signup ? <SignUp /> : <Login />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#093d61",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 20,
  },
});

export default ConnectionModal;
