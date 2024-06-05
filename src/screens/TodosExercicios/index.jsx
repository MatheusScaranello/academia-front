import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import apiExercicios from "../../service/Exercicios";
import apiGruposMusculares from "../../service/GruposMusculares";
import styles from "./styles";

export default function Cadastro() {
  const [erro, setErro] = useState(false);
  const [msgErro, setMsgErro] = useState("");
  const [categorias, setCategorias] = useState([]);
  const [grupoMuscular, setGrupoMuscular] = useState(null);
  const [gruposMusculares, setGruposMusculares] = useState([]);
  const [exercicios, setExercicios] = useState([]);
  const [selec_cat, setSelec_Cat] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const response = await apiGruposMusculares.getAllGruposMusculares();
        setGruposMusculares(response);
      } catch (error) {
        console.error("Erro ao buscar grupos musculares:", error.message);
        setErro(true);
        setMsgErro("Erro ao buscar grupos musculares");
      }
    };
    fetchCategorias();
  }, []);

  const exerciciosPorGrupo = async (grupoId) => {
    try {
      const response = await apiExercicios.getAllExercicios(grupoId);
      setExercicios(response);
    } catch (error) {
      console.error("Erro ao buscar exercicios por grupo muscular:", error.message);
      setErro(true);
      setMsgErro("Erro ao buscar exercicios por grupo muscular");
    }
  };

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
                onPress={() => {
                  setGrupoMuscular(grupo);
                  exerciciosPorGrupo(grupo.id);
                }}
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
  );
}