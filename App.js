import { StatusBar } from "expo-status-bar";
import { React, useEffect, useState } from "react";
import Login from "./components/Login";
import { StyleSheet, Text, View } from "react-native";
import ConnectionModal from "./components/ConnectionModal";
import axios from "axios";

export default function App() {
  return (
    <View style={styles.container}>
      <ConnectionModal />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
