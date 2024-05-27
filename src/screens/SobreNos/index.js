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
                    ]}
                    description2={[
                        "1. Qualidade",
                        "2. Conforto",
                        "3. Estilo",
                    ]}
                />
                <CardSobreNos
                    title="Quem Somos"
                    description={[
                        "Nossos produtos são feitos com materiais de alta qualidade,",
                        "garantindo a durabilidade e resistência dos mesmos.",
                    ]}
                    description2={[
                        "A Scarfit se preocupa com a qualidade dos produtos,",
                        "para que você possa treinar com segurança e conforto.",
                    ]}
                />
                <CardSobreNos
                    title="Nossos Valores"
                    description={[
                        "A Scarfit se preocupa com a qualidade dos produtos,",
                        "para que você possa treinar com segurança e conforto.",
                    ]}
                    description2={[
                        "A Scarfit se preocupa com a qualidade dos produtos,",
                        "para que você possa treinar com segurança e conforto.",
                    ]}
                />
                      <CardSobreNos
                    title="Membros da equipe"
                    description={[
                        "A Scarfit se preocupa com a qualidade dos produtos,",
                        "para que você possa treinar com segurança e conforto.",
                    ]}
                    description2={[
                        "A Scarfit se preocupa com a qualidade dos produtos,",
                        "para que você possa treinar com segurança e conforto.",
                    ]}
                />
            </ScrollView>
        </View>
    );
}
