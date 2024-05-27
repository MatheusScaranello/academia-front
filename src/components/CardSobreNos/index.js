import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

export default function CardSobreNos({ image, title, description }) { // Correctly destructured props
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Image source={image} style={styles.image} />
            <Text style={styles.text}>{description}</Text>
        </View>
    );
}
