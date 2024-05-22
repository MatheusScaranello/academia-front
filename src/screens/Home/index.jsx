import { View, Text } from "react-native";

import styles from "./styles";
import Header from "../../components/Header";

export default function Home() {
  return <View style={styles.container}>
    <Header />
    <View style={styles.content}>
          <Text style={styles.texto}>ScarFit</Text>
    </View>
  </View>;
}
