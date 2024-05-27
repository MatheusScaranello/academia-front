import React from "react";
import { View, ScrollView } from "react-native";
import styles from "./styles";
import CardSobreNos from "../../components/CardSobreNos";

export default function SobreNos() {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scroll}>
                <CardSobreNos
                    title="Sobre a ScarFit"
                    description={[
                        "Scarfit veio para auxiliar o seus conceito em treino.",
                        "Nos baseamos em três pontos:",
                        "1. Treino"
                    ]}
                />
            </ScrollView>
        </View>
    );
}
