import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, ScrollView, StyleSheet, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ServiceCategorias from "../../service/Categorias";
import ServiceGrupoMuscular from "../../service/GruposMusculares";
import ServiceExercicios from "../../service/Exercicios";

export default function TodosExercicios() {
  const navigation = useNavigation();
  const [exercicios, setExercicios] = useState([]);
  const [grupoMuscular, setGrupoMuscular] = useState([]);
  const [categoria, setCategoria] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingGrupo, setLoadingGrupo] = useState(false);
  const [loadingExercicios, setLoadingExercicios] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    loadCategorias();
  }, []);

  const loadCategorias = async () => {
    try {
      const response = await ServiceCategorias.getAllCategorias();
      setCategoria(response);
      setLoading(false);
    } catch (error) {
      setError("Erro ao carregar categorias.");
      setLoading(false);
    }
  };

  const loadGrupoMuscular = async (categoriaId) => {
    setLoadingGrupo(true);
    try {
      const response = await ServiceGrupoMuscular.getGruposMuscularesPorCategoria(categoriaId);
      setGrupoMuscular(response);
      setLoadingGrupo(false);
      setExercicios([]);
    } catch (error) {
      setError("Erro ao carregar grupo muscular.");
      setLoadingGrupo(false);
    }
  };

  const loadExercicios = async (grupoMuscularId) => {
    setLoadingExercicios(true);
    try {
      const response = await ServiceExercicios.getByIdExerciciosGrupoMuscular(grupoMuscularId);
      setExercicios(response);
      setLoadingExercicios(false);
    } catch (error) {
      setError("Erro ao carregar exercícios.");
      setLoadingExercicios(false);
    }
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <Text style={styles.title}>Escolha uma Categoria:</Text>
          <ScrollView style={styles.scrollView}>
            {categoria.map((cat) => (
              <TouchableOpacity key={cat.id} style={styles.button} onPress={() => loadGrupoMuscular(cat.id)}>
                <Text style={styles.buttonText}>{cat.nome}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <Text style={styles.title}>Grupos Musculares:</Text>
          {loadingGrupo ? (
            <ActivityIndicator size="small" color="#0000ff" />
          ) : (
            <ScrollView style={styles.scrollView}>
              {grupoMuscular.map((grupo) => (
                <TouchableOpacity key={grupo.id} style={styles.button} onPress={() => loadExercicios(grupo.id)}>
                  <Text style={styles.buttonText}>{grupo.nome}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          )}

          <Text style={styles.title}>Exercícios:</Text>
          {loadingExercicios ? (
            <ActivityIndicator size="small" color="#0000ff" />
          ) : (
            <ScrollView style={styles.scrollView}>
              {exercicios.map((exercicio) => (
                <TouchableOpacity key={exercicio.id} style={styles.button} onPress={() => navigation.navigate("Exercicio", { exercicio })}>
                  <Text style={styles.buttonText}>{exercicio.nome}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          )}

          {error ? <Text style={styles.errorText}>{error}</Text> : null}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  scrollView: {
    marginBottom: 20,
  },
  button: {
    padding: 10,
    backgroundColor: "#f0f0f0",
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
  },
  errorText: {
    color: "red",
    marginTop: 10,
  },
});