import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

const members = [
    {
        id: 1,
        name: "John Doe",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: require("./assets/john_doe.jpg"),
    },
    {
        id: 2,
        name: "Jane Smith",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: require("./assets/jane_smith.jpg"),
    },
    // Add more members as needed
];

export default function CardSobreNos({ image, title, description, description2 }) { // Correctly destructured props
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Image source={image} style={styles.image} />
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.description2}>{description2}</Text>
            
            <ScrollView horizontal style={styles.scrollView}>
            {members.map(member => (
                <View key={member.id} style={styles.slide}>
                    <Image source={member.image} style={styles.image} />
                    <Text style={styles.memberName}>{member.name}</Text>
                    <Text style={styles.description}>{member.description}</Text>
                </View>
            ))}
        </ScrollView>

        </View>
    );
}



