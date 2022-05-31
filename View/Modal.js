import React from "react";
import { Text, View, Modal, Alert } from "react-native";

const Modale = ({ montant, id1xbet, visibility }) => (
  <Modal animationType="slide" transparent={true} visible={visibility}>
    <View
      style={{
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={{ backgroundColor: "white", padding: 20, borderRadius: 10 }}>
        <Text>
          Confimer vous le dépot de {montant} sur le compte 1xbet {id1xbet} ?
        </Text>
      </View>
    </View>
  </Modal>
);

export default Modale;
