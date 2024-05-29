import React from "react";
import { View, ScrollView, Image } from "react-native";
import styles from "./styles";
import CardSobreNos from "../../components/CardSobreNos";

export default function SobreNos() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <CardSobreNos
          title="Sobre a ScarFit"
          description={[
            "Scarfit venho para auxiliar o seus conceito em treino.",
          ]}
          imagebranca={require("../../../assets/imgbranca.png.png")}
          description2={["Nos baseamos em três pontos:"]}
          description3={[
            "treino personalizado, Aréa explicativa, busca simplificada.",
          ]}
        />
      </ScrollView>
    </View>
  );
}
