import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import apiExercicios from "../../service/Exercicios";
import apiGruposMusculares from "../../service/GruposMusculares";

export default function Cadastro() {
<<<<<<< HEAD
  const [grupoMuscular, setGrupoMuscular] = useState("");
=======
  const [grupoMuscular, setGrupoMuscular] = useState(null);
  const [gruposMusculares, setGruposMusculares] = useState([]);
  const [exercicios, setExercicios] = useState([]);
>>>>>>> 89d627591a0180816c03cfa793c8daffc7772ace
  const [erro, setErro] = useState(false);
  const [msgErro, setMsgErro] = useState("");
  const [grupos, setGrupos] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
<<<<<<< HEAD
    async function carregarGrupos() {
      try {
        const response = await apiGruposMusculares.getAllGruposMusculares();
        setGrupos(response);
=======
    const fetchGruposMusculares = async () => {
      try {
        const response = await apiGruposMusculares.getAllGruposMusculares();
        setGruposMusculares(response);
>>>>>>> 89d627591a0180816c03cfa793c8daffc7772ace
      } catch (error) {
        console.error("Erro ao buscar grupos musculares:", error.message);
        setErro(true);
        setMsgErro("Erro ao buscar grupos musculares");
      }
<<<<<<< HEAD
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
=======
    };

    fetchGruposMusculares();
  }, []);

  useEffect(() => {
    const fetchExercicios = async () => {
      if (grupoMuscular && grupoMuscular.id) {
        try {
          const response = await apiGruposMusculares.getExerciciosPorGrupoMuscular(grupoMuscular.id);
          setExercicios(Array.isArray(response) ? response : []);
          console.log(setExercicios)
        } catch (error) {
          console.error("Erro ao buscar exercicios por grupo muscular:", error.message);
          setErro(true);
          setMsgErro("Erro ao buscar exercicios por grupo muscular");
        }
      }
    };

    fetchExercicios();
  }, [grupoMuscular]);
  consol.log(exercicios)
  console.log(grupoMuscular)

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>Todos Exercícios</Text>
        <View style={styles.contCad}>
          {!grupoMuscular ? (
            gruposMusculares.map((grupo) => (
              <TouchableOpacity
                style={styles.card}
                key={grupo.id}
                onPress={() => setGrupoMuscular(grupo)}
              >
                <Text style={styles.textCard}>{grupo.nome}</Text>
              </TouchableOpacity>
            ))
          ) : (
            exercicios.map((exe) => (
              <TouchableOpacity
                style={styles.card}
                key={exe.id}
                onPress={() => navigation.navigate("Treino")}
              >
                <Text style={styles.nomeCard}>{exe.nome_exercicio}</Text>
              </TouchableOpacity>
            ))
          )}
        </View>
        {erro && <Text style={styles.error}>{msgErro}</Text>}
      </View>
    </ScrollView>
>>>>>>> 89d627591a0180816c03cfa793c8daffc7772ace
  );
}
