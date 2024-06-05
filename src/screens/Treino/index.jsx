import { Text, View } from "react-native";
import { useEffect, useState } from "react";
import apiExercicios from "../../service/Exercicios";
import styles from "./styles";

export default function Treino({ route }) {
  const { id } = route.params;
  const [exercicio,setExercicio] = useState(null);

  useEffect(() => {
    const fetchGruposMusculares = async () => {
      try {
        const response = await apiExercicios.getByIdExercicios(id);
          setExercicio(response);
      } catch (error) {
        console.error("Erro ao buscar grupos musculares:", error.message);
        setErro(true);
        setMsgErro("Erro ao buscar grupos musculares");
      }
    };

    fetchGruposMusculares();
  }, [id]);

  return <View style={styles.container}>
    {exercicio.map((exe) => (
      <View key={exe.id}>
        <Text style={styles.title}>Treino</Text>
        <Text style={styles.text}>{exe.nome}</Text>
        <Text style={styles.text}>{exe.descricao}</Text>
        <Text style={styles.text}>{exe.video}</Text>
      </View>
    ))}
  </View>;
}
