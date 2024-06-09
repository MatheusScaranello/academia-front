import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#E8C185", // Cor de fundo condizente com os estilos anteriores
  },
  searchInput: {
    height: 40,
    borderColor: '#333', // Cor de borda mais escura para melhor contraste
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff', // Cor de fundo branca
  },
  exercicioItem: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#fff', // Cor de fundo branca
    borderRadius: 5,
    shadowColor: '#000', // Sombra
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  exercicioNome: {
    fontSize:  18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333', // Cor do texto condizente com os estilos anteriores
  },
  exercicioInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  input: {
    width: 50,
    height: 40,
    borderColor: '#333', // Cor de borda mais escura para melhor contraste
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff', // Cor de fundo branca
  },
  button: {
    backgroundColor: '#000', // Cor de fundo dourada
    padding: 10,
    borderRadius: 5,
    color: '#fff', // Cor do texto preto
  },
  buttonText: {
    color: '#fff', // Cor do texto branca
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;