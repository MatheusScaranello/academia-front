import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const Aula = ({ aula, onReserve }) => {
  return (
    <View style={styles.aulaContainer}>
      <Text style={styles.aulaName}>{aula.name}</Text>
      <Text style={styles.aulaTime}>{aula.time}</Text>
      <TouchableOpacity
        style={styles.reserveButton}
        onPress={() => onReserve(aula)}
      >
        <Text style={styles.reserveButtonText}>Reservar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Aula;
