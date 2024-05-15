import { Text, View } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function Exercicio({ route }) {
  const { data } = route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>{data.nome}</Text>
    </View>
  );
}
