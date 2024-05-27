// Importa o React do pacote 'react'
import React from "react";
// Importa os componentes View e ScrollView do React Native
import { View, ScrollView } from "react-native";
// Importa os estilos definidos no arquivo styles.js
import styles from "./styles";
// Importa o componente CardSobreNos
import CardSobreNos from "../../components/CardSobreNos";

// Define o componente funcional SobreNos
export default function SobreNos() {
  // Renderiza a interface do componente SobreNos
  return (
    // View principal com estilo container
    <View style={styles.container}>
      {/* ScrollView para permitir a rolagem do conteúdo */}
      <ScrollView style={styles.scroll}>
        {/* Componente CardSobreNos com título e descrição */}
        <CardSobreNos
          title="Sobre a ScarFit"
          description={[
            "Scarfit veio para auxiliar o seus conceito em treino.",
            "Nos baseamos em três pontos:",
          ]}
          description2={["1. Qualidade", "2. Conforto", "3. Estilo"]}
        />
      </ScrollView>
    </View>
  );
}
