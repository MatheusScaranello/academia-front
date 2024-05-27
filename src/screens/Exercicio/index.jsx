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
        setExercicios(response.data);
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
        setErro(true);
        setMsgErro("Erro ao buscar os dados. Por favor, tente novamente mais tarde.");
      }
    };
    fetchData();
  }
  , []);

  return (
    <View style={styles.container}>
      {erro ? (
        <Text style={styles.text}>{msgErro}</Text>
      ) : (
        <View>
          <Text style={styles.titulo}>{exercicios.titulo}</Text>
          <Text style={styles.text}>{exercicios.descricao}</Text>
        </View>
      )}
    </View>
  );
}
