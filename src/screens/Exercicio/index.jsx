import { Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function Exercicio({ route }) {
  const { data } = route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exercicio</Text>
      <Text style={styles.text}>Nome: {data.name}</Text>
      <Text style={styles.text}>Descrição: {data.description}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("TodosExercicios")}
      >
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
