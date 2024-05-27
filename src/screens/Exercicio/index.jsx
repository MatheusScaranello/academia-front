// Importa o React e os hooks useState e useEffect do React
import React, { useState, useEffect } from "react";
// Importa os componentes Text e View do React Native
import { Text, View } from "react-native";
// Importa os estilos definidos no arquivo styles.js
import styles from "./styles";
// Importa o serviço de exercícios para fazer chamadas à API
import apiExercicios from "../../service/Exercicios";

// Componente principal que recebe a propriedade route
export default function Exercicio({ route }) {
  // Extrai o id dos parâmetros da rota
  const { id } = route.params;
  // Define estados para armazenar os exercícios, o status de erro e a mensagem de erro
  const [exercicios, setExercicios] = useState([]);
  const [erro, setErro] = useState(false);
  const [msgErro, setMsgErro] = useState("");

  // useEffect para buscar os dados dos exercícios ao carregar o componente
  useEffect(() => {
    // Função assíncrona para buscar os dados dos exercícios
    const fetchData = async () => {
      try {
        // Chama a API para obter os exercícios pelo ID
        const response = await apiExercicios.getByIdExercicios(id);
        console.log("mensagem da api:", response);
        console.log("dados da api:", response.data);
        // Atualiza o estado com os dados dos exercícios
        return setExercicios(response);
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
        // Atualiza o estado de erro e a mensagem de erro
        setErro(true);
        setMsgErro(
          "Erro ao buscar os dados. Por favor, tente novamente mais tarde."
        );
      }
    };

    // Chama a função fetchData para buscar os dados
    fetchData();

    // Função de limpeza (cleanup) se necessário
    return () => {
      // Código de limpeza se necessário
    };
  }, [id]); // Dependência id, executa o efeito sempre que id mudar

  // Logs para depuração
  console.log(id);
  console.log(exercicios);
  console.log(setExercicios);

  // Renderiza a interface do componente
  return (
    <View style={styles.container}>
      {exercicios && exercicios.length > 0 ? (
        // Mapeia e renderiza cada exercício
        exercicios.map((exercicio) => (
          <View key={exercicio.id}>
            <Text style={styles.title}></Text>
            <Text style={styles.text}>{exercicio.nome}</Text>
            <Text style={styles.text}>{exercicio.descricao}</Text>
          </View>
        ))
      ) : erro ? (
        // Exibe a mensagem de erro se ocorrer um erro
        <Text style={styles.error}>{msgErro}</Text>
      ) : (
        // Exibe mensagem se nenhum exercício for encontrado
        <Text>Nenhum exercício encontrado.</Text>
      )}
    </View>
  );
}
