import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import apiUsuarios from "../../service/Usuarios";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

export default function Cadastro() {
  const navigation = useNavigation();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

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

  return (
    <ImageBackground
      source={require("../../../assets/imgfundo.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>Faça seu cadastro</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={nome}
              onChangeText={setNome}
              placeholder="Nome"
              placeholderTextColor={"white"}
            />
          </View>
          <View style={styles.inputContainer}>
            <FontAwesomeIcon name="envelope" size={20} color="white" />
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
              placeholderTextColor={"white"}
            />
          </View>
          <View style={styles.inputContainer}>
            <FontAwesomeIcon name="envelope" size={20} color="white" />
            <TextInput
              style={styles.input}
              value={cpf}
              onChangeText={setCpf}
              placeholder="CPF"
              placeholderTextColor={"white"}
            />
          </View>
          <View style={styles.inputContainer}>
            <FontAwesomeIcon name="envelope" size={20} color="white" />
            <TextInput
              style={styles.input}
              value={senha}
              onChangeText={setSenha}
              secureTextEntry={true}
              placeholder="Senha"
              placeholderTextColor={"white"}
            />
          </View>
          <View style={styles.inputContainer}>
            <FontAwesomeIcon name="envelope" size={20} color="white" />
            <TextInput
              style={styles.input}
              value={confirmarSenha}
              onChangeText={setConfirmarSenha}
              secureTextEntry={true}
              placeholder="Confirmar Senha"
              placeholderTextColor={"white"}
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