import React from "react";
import { Text, View, Modal, Alert } from "react-native";

const Modale = ({ params }) => (
  <Modal animationType="slide" transparent={true} visible={true}>
    <View
      style={{
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={{ backgroundColor: "white", padding: 20, borderRadius: 10 }}>
        <Text>Hello World!</Text>
      </View>
    </View>
  </Modal>
);

export default Modale;
