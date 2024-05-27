import React from "react";
import { View, ScrollView, Image} from "react-native";
import styles from "./styles";

export default function CardCarroseul({ data }) {
    return (
        <View style={styles.container}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {data.map((item, index) => (
            <View style={styles.slide} key={index}>
                <Image source={item.image} style={styles.image} />
            </View>
            ))}
        </ScrollView>
        </View>
    );
}