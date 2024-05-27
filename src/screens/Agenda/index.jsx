import React from "react";
import { View, Text, FlatList } from "react-native";
import Aula from "../../components/Aula/index.jsx";
import { styles } from "./styles";

const aulas = [
  {
    id: "1",
    name: "Yoga",
    time: "08:00 - 09:00",
    description: "Aula de Yoga para iniciantes",
  },
  {
    id: "2",
    name: "Pilates",
    time: "10:00 - 11:00",
    description: "Aula de Pilates intermediário",
  },
  // Adicione mais aulas conforme necessário
];

const Agenda = ({ navigation }) => {
  const handleReserve = (aula) => {
    navigation.navigate("AulaDetalhes", { aula });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agenda de Aulas</Text>
      <FlatList
        data={aulas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Aula aula={item} onReserve={handleReserve} />
        )}
      />
    </View>
  );
};

export default Agenda;
