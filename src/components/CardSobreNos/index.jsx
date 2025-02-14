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
      "assegurando que os objetivos do aplicativo sejam cumpridos de forma eficiente e colaborativa.",
  },
  {
    id: 2,
    image: require("../../../assets/marina.png"),
    name: "Marina Morais",
    description2: "Design UI e UX",
    description:
      "Responsável por criar interfaces de usuário intuitivas e experiências de usuário, garantindo um funcionamento, atraente e fáceis de usar.",
  },
  {
    id: 3,
    image: require("../../../assets/nickolas.png"),
    name: "Nickolas Lira",
    description2: "Documentador Técnico",
    description:
      "Responsável por criar e manter a documentação técnica precisa e compreensível para o aplicativo Scarfit, fornecendo suporte para usuários finais.",
  },
  {
    id: 4,
    image: require("../../../assets/samuel.png"),
    name: "Samuel Pinheiro",
    description2: "Desenvolvedor",
    description:
      "Responsável por contribuir para o desenvolvimento, manutenção e melhoria contínua do aplicativo Scarfit.",
  },
  {
    id: 5,
    image: require("../../../assets/thayna.png"),
    name: "Thayná Marques",
    description2: "Design UI e UX",
    description:
      "Responsável por criar interfaces de usuário intuitivas e experiências de usuário, garantindo um funcionamento atraente e fáceis de usar.",
  },
];

export default function CardSobreNos({
  imagebranca,
  imagedois,
  title,
  description,
  description2,
  description3,
  description4,
  description5,
  description6,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.description2}>{description2}</Text>
      <Text style={styles.description3}>{description3}</Text>
      <Image source={imagebranca} style={styles.imagebranca} />
      <Text style={styles.description4}>{description4}</Text>
      <Text style={styles.description5}>{description5}</Text>
      <Image source={imagedois} style={styles.imagedois} />
      <Text style={styles.description6}>{description6}</Text>

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
