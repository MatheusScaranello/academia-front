import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  StyleSheet,
} from "react-native";
import styles from "../Treino/styles";
import { useNavigation } from "@react-navigation/native";
import apiExercicios from "../../service/Exercicios";
import apiGrupoMusculo from "../../service/GruposMusculares";
export default function TodosExercicios() {
  const [nome, setNome] = useState("");
  const [grupoMuscular, setGrupoMuscular] = useState("");
  const [erro, setErro] = useState(false);
  const [msgErro, setMsgErro] = useState("");
  const [gruposMusculares, setGruposMusculares] = useState([]);
  const [exercicios, setExercicios] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    async function fetchGruposMusculares() {
      try {
        const response = await apiGrupoMusculo.getAllGruposMusculares();
        setGruposMusculares(response);
      } catch (error) {
        setErro(true);
        setMsgErro("Erro ao buscar grupos musculares");
      }
    }

    fetchGruposMusculares();
  }, []);

  const exerciciosPorGrupo = async (grupoMuscular) => {
    try {
      const response = await apiExercicios.getAllExercicios();
      const filteredExercicios = response.filter(
        (exercicio) => exercicio.grupoMuscular === grupoMuscular
      );
      setExercicios(filteredExercicios);
    } catch (error) {
      setErro(true);
      setMsgErro("Erro ao buscar exercícios por grupo muscular");
    }
  };

  const searchExercicio = async () => {
    try {
      const response = await apiGrupoMusculo.searchExercicio(searchTerm);
      setExercicios(response);
    } catch (error) {
      setErro(true);
      setMsgErro("Erro ao buscar exercícios");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Todos Exercícios</Text>
      <TextInput
        style={styles.input}
        placeholder="Buscar Exercício"
        value={searchTerm}
        onChangeText={(text) => setSearchTerm(text)}
        onSubmitEditing={searchExercicio}
      />
      <View style={styles.contCad}>
        {grupoMuscular === "" ? (
          <FlatList
            data={gruposMusculares}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.card}
                key={item.id}
                onPress={() => {
                  setGrupoMuscular(item.id);
                  exerciciosPorGrupo(item.id);
                }}
              >
                <Text style={styles.textCard}>{item.nome}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        ) : (
          <FlatList
            data={exercicios}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.card}
                key={item.id}
                onPress={() => {
                  navigation.navigate("Exercicio", { id: item.id });
                }}
              >
                <Text style={styles.textCard}>{item.nome}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        )}
      </View>
      {erro && <Text style={styles.error}>{msgErro}</Text>}
    </View>
  );
}
