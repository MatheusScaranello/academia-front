// Importa os componentes Text e View do React Native
import { Text, View } from "react-native";
// Importa os estilos definidos no arquivo styles.js
import styles from "./styles";
// Importa React e o hook useEffect do pacote 'react'
import React, { useEffect, useState } from "react";
// Importa o serviço apiGruposMusculares do arquivo de serviços
import apiGruposMusculares from "../../service/GruposMusculares";

// Define o componente funcional Treino
export default function Treino({ route }) {
  // Obtém o id dos parâmetros da rota
  const { id } = route.params;

  // Declara estados para armazenar dados
  const [gruposMusculares, setGruposMusculares] = useState([]);
  const [erro, setErro] = useState(false);
  const [msgErro, setMsgErro] = useState("");

  // useEffect para buscar todos os grupos musculares na montagem do componente
  useEffect(() => {
    const fetchGruposMusculares = async () => {
      try {
        // Chama o serviço para buscar todos os grupos musculares
        const response = await apiGruposMusculares.getAllGruposMusculares();
        // Define o estado com a resposta da API
        setGruposMusculares(response);
      } catch (error) {
        // Trata erros de busca
        console.error("Erro ao buscar grupos musculares:", error.message);
        setErro(true);
        setMsgErro("Erro ao buscar grupos musculares");
      }
    };

    // Chama a função de busca de grupos musculares
    fetchGruposMusculares();
  }, []);

  // Renderiza a interface do componente Treino
  return (
    <View style={styles.container}>
      {/* Mapeia e renderiza os itens do treino */}
      {gruposMusculares.map((item, index) => (
        <View key={index}>
          <Text style={styles.title}>Treino</Text>
          <Text style={styles.text}>{item.exercicio1.nome}</Text>
          <Text style={styles.text}>{item.exercicio2.nome}</Text>
          <Text style={styles.text}>{item.exercicio3.nome}</Text>
          <Text style={styles.text}>{item.exercicio4.nome}</Text>
          <Text style={styles.text}>{item.exercicio5.nome}</Text>
          <Text style={styles.text}>{item.exercicio6.nome}</Text>
          <Text style={styles.text}>{item.exercicio7.nome}</Text>
          <Text style={styles.text}>{item.exercicio8.nome}</Text>
          <Text style={styles.text}>{item.exercicio9.nome}</Text>
          <Text style={styles.text}>{item.exercicio10.nome}</Text>
        </View>
      ))}
      {/* Exibe mensagem de erro, se houver */}
      {erro && <Text style={styles.error}>{msgErro}</Text>}
    </View>
  );
}
