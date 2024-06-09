import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Animated, TextInput, Button } from "react-native";
import exercicioService from "../../service/Exercicios";
import styles from "./styles";

const Treino = () => {
  const [exercicios, setExercicios] = useState([]);
  const [treino, setTreino] = useState([]);
  const [fadeAnim] = useState(new Animated.Value(0));
  const [search, setSearch] = useState("");
  const [onTreino, setOnTreino] = useState(false);

  useEffect(() => {
    loadExercicios();
    fadeIn();
  }, []);

  const loadExercicios = async () => {
    try {
      const response = await exercicioService.getAllExercicios();
      setExercicios(response);
    } catch (error) {
      console.error("Erro ao carregar exercícios do usuário:", error.message);
    }
  };

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const searchExercicio = () => {
    const filteredExercicios = exercicios.filter(exercicio => {
      return exercicio.nome.toLowerCase().includes(search.toLowerCase());
    });
    setExercicios(filteredExercicios);
  };

  const addExercicio = (exercicio) => {
    const novoExercicio = { ...exercicio, series: 1, repeticoes: 10, carga: 20 }; // Valores padrão para séries, repetições e carga
    setTreino([...treino, novoExercicio]);
    // Remover exercício da lista de exercícios disponíveis após ser adicionado ao treino
    const updatedExercicios = exercicios.filter(item => item.id !== exercicio.id);
    setExercicios(updatedExercicios);
  };

  const removeExercicio = (exercicio) => {
    const newTreino = treino.filter(ex => ex.id !== exercicio.id);
    setTreino(newTreino);
    // Adicionar exercício de volta à lista de exercícios disponíveis após ser removido do treino
    setExercicios([...exercicios, exercicio]);
  };

  const toggleView = () => {
    setOnTreino(!onTreino);
  };

  const incrementSeries = (exercicio) => {
    const newTreino = treino.map(ex => {
      if (ex.id === exercicio.id) {
        return { ...ex, series: ex.series + 1 };
      }
      return ex;
    });
    setTreino(newTreino);
  };

  const decrementSeries = (exercicio) => {
    const newTreino = treino.map(ex => {
      if (ex.id === exercicio.id && ex.series > 1) {
        return { ...ex, series: ex.series - 1 };
      }
      return ex;
    });
    setTreino(newTreino);
  };

  const handleChangeRepeticoes = (exercicio, value) => {
    const newTreino = treino.map(ex => {
      if (ex.id === exercicio.id) {
        return { ...ex, repeticoes: value };
      }
      return ex;
    });
    setTreino(newTreino);
  };

  const handleChangeCarga = (exercicio, value) => {
    const newTreino = treino.map(ex => {
      if (ex.id === exercicio.id) {
        return { ...ex, carga: value };
      }
      return ex;
    });
    setTreino(newTreino);
  };

  return (
    <Animated.ScrollView
      contentContainerStyle={[styles.container, { opacity: fadeAnim }]}
      showsVerticalScrollIndicator={false}
    >
      <TextInput
        style={styles.searchInput}
        onChangeText={text => setSearch(text)}
        value={search}
        placeholder="Pesquisar exercício"
        onSubmitEditing={searchExercicio}
      />
      <Button title={onTreino ? "Exercícios Disponíveis" : "Meu Treino"} onPress={toggleView} />
      {onTreino ? (
        <View>
          {treino.map(exercicio => (
            <ExercicioItem key={exercicio.id} exercicio={exercicio} onIncrementSeries={incrementSeries} onDecrementSeries={decrementSeries} onRemoveExercicio={removeExercicio} onChangeRepeticoes={handleChangeRepeticoes} onChangeCarga={handleChangeCarga} />
          ))}
        </View>
      ) : (
        <View>
          {exercicios.map(exercicio => (
            <TouchableOpacity
              key={exercicio.id}
              style={styles.exercicioItem}
              onPress={() => addExercicio(exercicio)}
            >
              <Text style={styles.exercicioNome}>{exercicio.nome}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </Animated.ScrollView>
  );
};

const ExercicioItem = ({ exercicio, onIncrementSeries, onDecrementSeries, onRemoveExercicio, onChangeRepeticoes, onChangeCarga }) => {
  return (
    <View style={styles.exercicioItem}>
      <Text style={styles.exercicioNome}>{exercicio.nome}</Text>
      <View style={styles.exercicioInfo}>
        <Text>Séries: {exercicio.series}</Text>
        <Button title="+" onPress={() => onIncrementSeries(exercicio)} />
        <Button title="-" onPress={() => onDecrementSeries(exercicio)} />
      </View>
      <View style={styles.exercicioInfo}>
        <TextInput
          style={styles.input}
          value={exercicio.repeticoes.toString()}
          keyboardType="numeric"
          onChangeText={(text) => onChangeRepeticoes(exercicio, parseInt(text) || 0)}
        />
        <Text>Repetições</Text>
      </View>
      <View style={styles.exercicioInfo}>
        <TextInput
          style={styles.input}
          value={exercicio.carga.toString()}
          keyboardType="numeric"
          onChangeText={(text) => onChangeCarga(exercicio, parseInt(text) || 0)}
        />
        <Text>Carga (kg)</Text>
      </View>
      <Button title="Remover" onPress={() => onRemoveExercicio(exercicio)} />
    </View>
  );
};

export default Treino;