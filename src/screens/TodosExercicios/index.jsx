import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import apiCategorias from "../../service/Categorias";
import apiGruposMusculares from "../../service/GruposMusculares";
import styles from "./styles";

export default function () {
  const [erro, setErro] = useState(false);
  const [msgErro, setMsgErro] = useState("");
  const [categorias, setCategorias] = useState([]);
  const [grupoMuscular, setGrupoMuscular] = useState(null);
  const [exercicios, setExercicios] = useState([]);
  const [selec_cat, setSelec_Cat] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const response = await apiCategorias.getAllCategorias();
        setCategorias(response);
      } catch (error) {
        console.error("Erro ao buscar categorias:", error.message);
        setErro(true);
        setMsgErro("Erro ao buscar categorias");
      }
    };

    fetchCategorias();
  }, []);

  useEffect(() => {
    if (selec_cat && selec_cat.id) {
      const fetchGrupoMuscular = async () => {
        try {
          const response = await apiGruposMusculares.agrupaPorID(selec_cat.id);
          setGrupoMuscular(response);
          setExercicios([]);
        } catch (error) {
          console.error("Erro ao buscar grupos musculares:", error.message);
          setErro(true);
          setMsgErro("Erro ao buscar grupos musculares");
        }
      };

      fetchGrupoMuscular();
    }
  }, [selec_cat]);

  useEffect(() => {

      const fetchExercicios = async () => {
        try {
          const response =
            await apiGruposMusculares.getExerciciosPorGrupoMuscular(
              grupoMuscular.id
            );
          setExercicios(response);
        } catch (error) {
          console.error("Erro ao buscar exercícios:", error.message);
          setErro(true);
          setMsgErro("Erro ao buscar exercícios");
        }
      };

      fetchExercicios();
    
  }, [grupoMuscular]);

  console.log("exercicios", exercicios);
  console.log("grupoMuscular", grupoMuscular);
  console.log("selec_cat", selec_cat);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>Todos Exercícios</Text>
        <View style={styles.contCad}>
          {!selec_cat
            ? categorias.map((categoria) => (
                <TouchableOpacity
                  style={styles.card}
                  key={categoria.id}
                  onPress={() => setSelec_Cat(categoria)}
                >
                  <Text style={styles.textCard}>{categoria.nome}</Text>
                </TouchableOpacity>
              ))
            : !grupoMuscular
            ? grupoMuscular.map((exe) => (
                <TouchableOpacity style={styles.card} key={exe.id}>
                  <Text style={styles.nomeCard}>{exe.nome}</Text>
                </TouchableOpacity>
              ))
            : exercicios.map((ex) => (
                <TouchableOpacity
                  style={styles.card}
                  key={ex.id}
                  onPress={() => navigation.navigate("Treino")}
                >
                  <Text style={styles.nomeCard}>{ex.nome}</Text>
                </TouchableOpacity>
              ))}
        </View>
        {erro && <Text style={styles.error}>{msgErro}</Text>}
      </View>
    </ScrollView>
  );
}
