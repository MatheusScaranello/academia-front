// Importa componentes do React Native
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from "react-native";
// Importa o React
import React, { useState } from "react";
// Importa o hook de navegação do React Navigation
import { useNavigation } from "@react-navigation/native";
// Importa os estilos definidos no arquivo styles.js
import { styles } from "./styles";
// Importa o serviço de usuário para realizar ações relacionadas ao usuário
import apiUsuarios from "../../service/Usuarios";
// Importa a biblioteca de ícones
import Icon from "react-native-vector-icons/FontAwesome";
import { Header } from "../../components/Header";

// Função principal do componente de cadastro de usuário
export default function Cadastro() {
  // Inicializa o hook de navegação
  const navigation = useNavigation();

  // Define os estados para armazenar os valores dos campos de entrada
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  // Função para realizar o cadastro
  const cadastrar = async () => {
    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem.");
      return;
    }
    try {
      const response = await apiUsuarios.cadastrar({ nome, email, cpf, senha });
      if (response.status === 201) {
        alert("Usuário cadastrado com sucesso!");
        navigation.navigate("Login");
      } else {
        alert("Erro ao cadastrar usuário. Tente novamente.");
      }
    } catch (error) {
      alert("Erro ao cadastrar usuário. Tente novamente.");
    }
  };

  // Renderiza a interface de cadastro
  return (
    // Define a imagem de fundo
    <ImageBackground
      source={require("../../../assets/imgfundo.png")} // ajuste o caminho conforme necessário
      style={styles.background}
    >
      <View style={styles.container}>
        <Header />
        <Text style={styles.title}>Cadastro</Text>
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Icon name="user" size={20} style={styles.icon} />
            <TextInput
              style={styles.input}
              value={nome}
              onChangeText={setNome}
              placeholder="Nome"
            />
          </View>
          <View style={styles.inputContainer}>
            <Icon name="envelope" size={20} style={styles.icon} />
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
            />
          </View>
          <View style={styles.inputContainer}>
            <Icon name="id-card" size={20} style={styles.icon} />
            <TextInput
              style={styles.input}
              value={cpf}
              onChangeText={setCpf}
              placeholder="CPF"
            />
          </View>
          <View style={styles.inputContainer}>
            <Icon name="lock" size={20} style={styles.icon} />
            <TextInput
              style={styles.input}
              value={senha}
              onChangeText={setSenha}
              secureTextEntry={true}
              placeholder="Senha"
            />
          </View>
          <View style={styles.inputContainer}>
            <Icon name="lock" size={20} style={styles.icon} />
            <TextInput
              style={styles.input}
              value={confirmarSenha}
              onChangeText={setConfirmarSenha}
              secureTextEntry={true}
              placeholder="Confirmar Senha"
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={cadastrar}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.buttonText}>
              Se já tem cadastro, faça o login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
