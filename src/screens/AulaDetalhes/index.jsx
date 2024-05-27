// AulaDetalhes.js
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const AulaDetalhes = ({ route, navigation }) => {
  const { aula } = route.params;

  const handleReserva = () => {
    // Lógica para reservar a aula
    alert(`Aula de ${aula.name} reservada!`);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.aulaName}>{aula.name}</Text>
      <Text style={styles.aulaTime}>{aula.time}</Text>
      <Text style={styles.aulaDescription}>{aula.description}</Text>
      <TouchableOpacity style={styles.reserveButton} onPress={handleReserva}>
        <Text style={styles.reserveButtonText}>Confirmar Reserva</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AulaDetalhes;
