import React from "react";
import { View, Image } from "react-native";
import styles from "./styles";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require("")}
        />
      </View>
    </View>
  );
}