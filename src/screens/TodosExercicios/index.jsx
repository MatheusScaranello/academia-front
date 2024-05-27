// Importa os componentes Text, View, TouchableOpacity e ScrollView do React Native
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
// Importa os estilos definidos no arquivo styles.js
import styles from "./styles";
// Importa React e hooks useState e useEffect do pacote 'react'
import React, { useState, useEffect } from "react";
// Importa o hook useNavigation da biblioteca @react-navigation/native
import { useNavigation } from "@react-navigation/native";
// Importa o serviço apiGruposMusculares do arquivo de serviços
import apiGruposMusculares from "../../service/GruposMusculares";

// Define o componente funcional Cadastro
export default function Cadastro() {
  // Declara estados para armazenar dados
  const [grupoMuscular, setGrupoMuscular] = useState(null);
  const [gruposMusculares, setGruposMusculares] = useState([]);
  const [exercicios, setExercicios] = useState([]);
  const [erro, setErro] = useState(false);
  const [msgErro, setMsgErro] = useState("");
  // Usa o hook useNavigation para navegação
  const navigation = useNavigation();

  // useEffect para buscar todos os grupos musculares na montagem do componente
  useEffect(() => {
    const fetchGruposMusculares = async () => {
      try {
        const response = await apiGruposMusculares.getAllGruposMusculares();
        setGruposMusculares(response);
      } catch (error) {
        console.error("Erro ao buscar grupos musculares:", error.message);
        setErro(true);
        setMsgErro("Erro ao buscar grupos musculares");
      }
    };

    fetchGruposMusculares();
  }, []);

  // useEffect para buscar exercícios quando um grupo muscular é selecionado
  useEffect(() => {
    const fetchExercicios = async () => {
      if (grupoMuscular && grupoMuscular.id) {
        try {
          const response =
            await apiGruposMusculares.getExerciciosPorGrupoMuscular(
              grupoMuscular.id
            );
          setExercicios(Array.isArray(response) ? response : []);
        } catch (error) {
          console.error(
            "Erro ao buscar exercicios por grupo muscular:",
            error.message
          );
          setErro(true);
          setMsgErro("Erro ao buscar exercicios por grupo muscular");
        }
      }
    };

    fetchExercicios();
  }, [grupoMuscular]);

  // Renderiza a interface do componente Cadastro
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>Todos Exercícios</Text>
        <View style={styles.contCad}>
          {/* Se não há grupo muscular selecionado, mostra a lista de grupos musculares */}
          {!grupoMuscular
            ? gruposMusculares.map((grupo) => (
                <TouchableOpacity
                  style={styles.card}
                  key={grupo.id}
                  onPress={() => setGrupoMuscular(grupo)}
                >
                  <Text style={styles.textCard}>{grupo.nome}</Text>
                </TouchableOpacity>
              ))
            : /* Se há grupo muscular selecionado, mostra a lista de exercícios desse grupo */
              exercicios.map((exe) => (
                <TouchableOpacity
                  style={styles.card}
                  key={exe.id}
                  onPress={() =>
                    navigation.navigate("Exercicio", { id: exe.id })
                  }
                >
                  <Text style={styles.nomeCard}>{exe.nome_exercicio}</Text>
                </TouchableOpacity>
              ))}
        </View>
        {/* Exibe mensagem de erro, se houver */}
        {erro && <Text style={styles.error}>{msgErro}</Text>}
      </View>
    </ScrollView>
  );
}
