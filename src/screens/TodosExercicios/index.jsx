import { Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import apiExercicios from "../../service/Exercicios";
import apiGruposMusculares from "../../service/GruposMusculares";

export default function Cadastro() {
  const [grupoMuscular, setGrupoMuscular] = useState("");
  const [erro, setErro] = useState(false);
  const [msgErro, setMsgErro] = useState("");
  const [grupos, setGrupos] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    async function carregarGrupos() {
      try {
        const response = await apiGruposMusculares.getAllGruposMusculares();
        setGrupos(response);
      } catch (error) {
        console.error("Erro ao buscar grupos musculares:", error.message);
        setErro(true);
        setMsgErro("Erro ao buscar grupos musculares");
      }
    }
    carregarGrupos();
  }, []);

  const exerciciosPorGrupo = async (grupoId) => {
    try {
      const response = await apiExercicios.getAllExercicios(grupoId);
      console.log(response);
      return response;
    } catch (error) {
      console.error(
        "Erro ao buscar exercicios por grupo muscular:",
        error.message
      );
      setErro(true);
      setMsgErro("Erro ao buscar exercicios por grupo muscular");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Todos Exercícios</Text>
      <View style={styles.contCad}>
        {grupos.map((grupo) => (
          <TouchableOpacity
            style={styles.card}
            key={grupo.id}
            onPress={() => {
              setGrupoMuscular(grupo.id);
              exerciciosPorGrupo(grupo.id);
            }}
          >
            <Text style={styles.textCard}>{grupo.nome}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
