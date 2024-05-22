import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import apiExercicios from "../../service/Exercicios";

export default function Exercicio({ route }) {
  const { id } = route.params;
  const [exercicios, setExercicios] = useState([]);
  const [erro, setErro] = useState(false);
  const [msgErro, setMsgErro] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiExercicios.getByIdExercicios(id);
      return  setExercicios(response.data);
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
        setErro(true);
        setMsgErro("Erro ao buscar os dados. Por favor, tente novamente mais tarde.");
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      // Cleanup code if necessary
    };
  }, [id]);

console.log(id)
console.log(exercicios)
console.log(setExercicios)
  return (
    <View style={styles.container}>
      {exercicios && exercicios.length > 0 ? (
        exercicios.map((exercicio) => (
          <View key={exercicio.id}>
            <Text style={styles.title}></Text>
            <Text style={styles.text}>{exercicio.nome}</Text>
          </View>
        ))
      ) : erro ? (
        <Text style={styles.error}>{msgErro}</Text>
      ) : (
        <Text>Nenhum exercício encontrado.</Text>
      )}
    </View>
  );
}
