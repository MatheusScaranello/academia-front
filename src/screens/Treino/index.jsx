import { Text, View } from "react-native";
import styles from "./styles";
import apiExercicios from "../../service/Exercicios";

export default function Treino({ route }) {
  const { id } = route.params;
  const [dadosTreino,setDadosTreino]=useState(false)

  useEffect(() => {
    const fetchGruposMusculares = async () => {
      try {
        const response = await apiExercicios.getByIdExercicios(id);
        setDadosTreino(response)
      } catch (error) {
        console.error("Erro ao buscar grupos musculares:", error.message);
        setErro(true);
        setMsgErro("Erro ao buscar grupos musculares");
      }
    };

    fetchGruposMusculares();
  }, []);

  return <View style={styles.container}>{
    set.map((item, index) => (
      <View key={index}>
        <Text style={styles.title}>Treino</Text>
        <Text style={styles.text}>{item.exercicio1.nome}</Text>
        <Text style={styles.text}>{item.exercicio2.nome}</Text>
        <Text style={styles.text}>{item.exercicio3.nome}</Text>
      </View>
    ))
  }</View>;
}
