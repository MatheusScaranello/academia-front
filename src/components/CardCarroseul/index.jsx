import React from "react";
import { View, ScrollView, Image } from "react-native";
import styles from "./styles";

const images = [
  {
    image: require("../../../assets/ScarMuscu.png"),
  },
  {
    image: require("../../../assets/ScarCardio.png"),
  },
  {
    image: require("../../../assets/ScarCross.png"),
  },
  {
    image: require("../../../assets/ScarDance.png"),
  },
];

export default function CardCarrossel() {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {images.map((item, index) => (
          <View style={styles.slide} key={index}>
            <Image source={item.image} style={styles.image} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}