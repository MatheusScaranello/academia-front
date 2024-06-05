import { Text, View } from "react-native";
import styles from "./styles";
import apiExercicios from "../../service/Exercicios";

export default function Treino({ route }) {
  const { id } = route.params;
  const [exercice, setExercice] = useState(fale);

  useEffect(() => {
    const fetchGruposMusculares = async () => {
      try {
        const response = await apiExercicios.getByIdExercicios(id);
        setExercice(response);
      } catch (error) {
        console.error("Erro ao buscar grupos musculares:", error.message);
        setErro(true);
        setMsgErro("Erro ao buscar grupos musculares");
      }
    };

    fetchGruposMusculares();
  }, [exercice.id]);

  return (
    <View style={styles.container}>
      {exercice.map((exe) => (
        <View key={exe.id}>
          <Text style={styles.title}>Treino</Text>
          <Text style={styles.text}>{exe.nome}</Text>
          <Text style={styles.text}>{exe.descricao}</Text>

        
        </View>
      ))}
    </View>
  );
}
