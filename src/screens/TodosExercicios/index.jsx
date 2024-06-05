import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
<<<<<<< HEAD
import apiCategorias from "../../service/Categorias";
=======
>>>>>>> b0772f2d2a7121736a4988474f99ccbf67f7b86c
import apiGruposMusculares from "../../service/GruposMusculares";
import styles from "./styles";

<<<<<<< HEAD
export default function () {
=======
export default function Cadastro() {

  const [grupoMuscular, setGrupoMuscular] = useState(null);
  const [gruposMusculares, setGruposMusculares] = useState([]);
>>>>>>> b0772f2d2a7121736a4988474f99ccbf67f7b86c
  const [erro, setErro] = useState(false);
  const [msgErro, setMsgErro] = useState("");
  const [categorias, setCategorias] = useState([]);
  const [grupoMuscular, setGrupoMuscular] = useState(null);
  const [exercicios, setExercicios] = useState([]);
  const [selec_cat, setSelec_Cat] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
<<<<<<< HEAD
    const fetchCategorias = async () => {
      try {
        const response = await apiCategorias.getAllCategorias();
        setCategorias(response);
=======

    const fetchGruposMusculares = async () => {
      try {
        const response = await apiGruposMusculares.getAllGruposMusculares();
        setGruposMusculares(response);
>>>>>>> b0772f2d2a7121736a4988474f99ccbf67f7b86c
      } catch (error) {
        console.error("Erro ao buscar categorias:", error.message);
        setErro(true);
        setMsgErro("Erro ao buscar categorias");
      }
<<<<<<< HEAD
=======
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
>>>>>>> b0772f2d2a7121736a4988474f99ccbf67f7b86c
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
<<<<<<< HEAD
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
=======
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
                onPress={() => navigation.navigate("Exercicio" ,{ id: exe.id })}
              >
                <Text style={styles.nomeCard}>{exe.nome_exercicio}</Text>
              </TouchableOpacity>
            ))
          )}
>>>>>>> b0772f2d2a7121736a4988474f99ccbf67f7b86c
        </View>
        {erro && <Text style={styles.error}>{msgErro}</Text>}
      </View>
    </ScrollView>
  );
}
