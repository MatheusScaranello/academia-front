// SobreNos.js
import React from "react";
import { View, ScrollView, Image } from "react-native";
import styles from "./styles";
import CardSobreNos from "../../components/CardSobreNos";
import Header from "../../components/Header";

export default function SobreNos() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
      <Header />
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
          description4={["Quem Somos"]}
          description5={[
            "No Scarfit, acreditamos que o bem-estar físico é a chave para uma vida equilibrada e saudável. Somos um aplicativo de academia inovador, dedicado a transformar sua rotina de exercícios em uma experiência motivadora, eficaz e prazerosa.",
          ]}
        />
      </ScrollView>
    </View>
  );
}
