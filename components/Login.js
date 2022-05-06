import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const Login = () => (
  <View
    style={{
      height: "100%",
      backgroundColor: "#a70a2d",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "50%",
      borderWidth: 5,
    }}
  >
    <Text style={styles.title}>Se connecter</Text>

    <TextInput style={styles.input} placeholder="Email" />
    <TextInput style={styles.input} placeholder="Mot de passe" textS />
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Se connecter</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#fff",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    width: "80%",
  },
  button: {
    backgroundColor: "#1c9ed9",
    padding: 10,
    marginTop: 20,
    width: "50%",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
    borderRadius: 30,
  },
});

export default Login;
