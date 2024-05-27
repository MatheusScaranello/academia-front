import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    title: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#FCD89E",
        textAlign: "center",
        marginBottom: 10,
        marginTop: 30,
    },
    descriptionMember: {
        color: "white",
        textAlign: "center",
        fontSize: 15,
        marginBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
    },
    description2: {
        color: "#FCD89E",
    },
    image: {
        marginLeft: 25,
        alignItems: "center",
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 10,
        marginRight: 10,
    },
    slide: {
        backgroundColor: "gray",
        alignItems: "center",
        justifyContent: "center",
        width: 300,
        height: 300,
        borderRadius: 10,
        margin: 10,
    },
});

export default styles;