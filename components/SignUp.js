import React from "react";
import { Text, View, TextInput, Button, StyleSheet } from "react-native";

const SignUp = ({}) => (
  <View
    style={{
      height: "100%",
      backgroundColor: "#a70a2d",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "70%",
      borderWidth: 5,
    }}
  >
    <Text style={styles.title}>S'inscrire</Text>
    <TextInput style={styles.input} placeholder="Nom" />
    <TextInput style={styles.input} placeholder="Prénom" />
    <TextInput style={styles.input} placeholder="Email" />
    <TextInput style={styles.input} placeholder="Mot de passe" />
    <TextInput style={styles.input} placeholder="Confirmer mot de passe" />
    <Button title="S'inscrire" />
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
    backgroundColor: "#fff",
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

export default SignUp;
