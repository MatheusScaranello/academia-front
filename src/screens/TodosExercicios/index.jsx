import { Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";
import React from "react";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import apiExercicios from "../../service/Exercicios";
import apiGruposMusculares from "../../service/GruposMusculares";

export default function Cadastro() {

  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [grupoMuscular, setGrupoMuscular] = useState("");
  const [erro, setErro] = useState(false);
  const [msgErro, setMsgErro] = useState("");
  const navigation = useNavigation();

  const separarGrupos = async () => {
    try {
      const response = await apiGruposMusculares.getAllGruposMusculares();
      console.log(response);
      return response;
    } catch (error) {
      console.error("Erro ao buscar grupos musculares:", error.message);
      setErro(true);
      setMsgErro("Erro ao buscar grupos musculares");
    }
  };

  const exerciciosPorGrupo = async () => {
    try {
      const response = await apiExercicios.getAllExercicios(grupoMuscular);
      console.log(response);
      return response;
    } catch (error) {
      console.error("Erro ao buscar exercicios por grupo muscular:", error.message);
      setErro(true);
      setMsgErro("Erro ao buscar exercicios por grupo muscular");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Todos Exercícios</Text>
      <View style={styles.contCad}>
        {
          grupoMuscular =! "" ?  separarGrupos().map((grupo) => {
            return (
              <TouchableOpacity
                style={styles.card}
                key={grupo.id}
                onPress={() => {
                  setGrupoMuscular(grupo.id);
                  exerciciosPorGrupo();
                }}
              >
                <Text style={styles.textCard}>{grupo.nome}</Text>
              </TouchableOpacity>
            );
          })
          : exerciciosPorGrupo().map((exercicio) => {
            return (
              <TouchableOpacity
                style={styles.card}
                key={exercicio.id}
                onPress={() => {
                  navigation.navigate("Exercicio", { id: exercicio.id });
                }}
              >
                <Text style={styles.textCard}>{exercicio.nome}</Text>
              </TouchableOpacity>
            );
          })
        }
        </View>
      </View>
  );
}

