import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import styles from "./styles";

const members = [
  {
    id: 1,
    image: require("../../../assets/matheus.png"),
    name: "Matheus Scaranello",
    description2: "Gerente Chefe",
    description:
      " assegurando que os objetivos do aplicativo sejam cumpridos de forma eficiente e colaborativa.",
  },
  {
    id: 2,
    image: require("../../../assets/marina.png"),
    name: "Marina Morais",
    description: "Design UI e UX",
    description:
      "Responsável por criar interfaces de usuário intuitivas e experiências de usuário,garantindo um funcionamento, atraente e fáceis de usar.",
  },
  {
    id: 3,
    image: require("../../../assets/nickolas.png"),
    name: "Nickolas Lira",
    description2: "Documentador Têcnico",
    description:
      "responsável por criar e manter a documentação técnica precisa e compreensível para o aplicativo Scarfit.suporte para usuários finais.",
  },
  {
    id: 4,
    image: require("../../../assets/samuel.png"),
    name: "Samuel Pinheiro",
    description2: "Desenvolvedor",
    description:
      "responsável por contribuir para o desenvolvimento, manutenção e melhoria contínua do aplicativo Scarfit.",
  },
  {
    id: 5,
    image: require("../../../assets/thayna.png"),
    name: "Thayná Marques",
    description2: "Design UI e UX",
    description:
      "Responsável por criar interfaces de usuário intuitivas e experiências de usuário,garantindo um funcionamento, atraente e fáceis de usar.",
  },
];

export default function CardSobreNos({
  image,
  title,
  description,
  description2,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Image source={image} style={styles.image} />
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.description2}>{description2}</Text>

      <ScrollView horizontal style={styles.scrollView}>
        {members.map((member) => (
          <View key={member.id} style={styles.slide}>
            <Image source={member.image} style={styles.image} />
            <Text style={styles.memberName}>{member.name}</Text>
            <Text style={styles.descriptionMember}>{member.description2}</Text>
            <Text style={styles.descriptionMember}>{member.description}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
