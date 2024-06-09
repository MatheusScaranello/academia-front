import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    searchInput: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
      marginBottom: 20,
      paddingHorizontal: 10,
    },
    exercicioItem: {
      marginBottom: 10,
      padding: 10,
      backgroundColor: '#f0f0f0',
      borderRadius: 5,
    },
    exercicioNome: {
      fontSize:  18,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    exercicioInfo: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 5,
    },
    input: {
      width: 50,
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
      marginRight: 10,
      paddingHorizontal: 10,
    },
});

export default styles;
