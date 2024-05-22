import { Text, View } from "react-native";
import styles from "./styles";

export default function Treino({ route }) {
  const { data } = route.params;
  return <View style={styles.container}>{
    data.map((item, index) => (
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
    ))
  }</View>;
}
