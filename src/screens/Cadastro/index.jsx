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
    } else if (senha.length < 6) {
      alert("A senha deve ter no mínimo 6 caracteres.");
      return;
    } else if (!verificarEmail(email)) {
      alert("Email inválido.");
      return;
    } else if (!verificarCPF(cpf)) {
      alert("CPF inválido.");
      return;
    } else if (nome === "" || email === "" || cpf === "" || senha === "") {
      alert("Preencha todos os campos.");
      return;
    } else {
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
    }}
  };

  const verificarCPF = (cpf) => {
    // Remove todos os caracteres que não são dígitos
    cpf = cpf.replace(/\D/g, '');
  
    // Verifica se o CPF tem 11 dígitos
    if (cpf.length !== 11) {
      return false;
    }
  
    // Verifica se todos os dígitos são iguais (CPF inválido)
    if (/^(\d)\1{10}$/.test(cpf)) {
      return false;
    }
  
    // Calcula o primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = soma % 11;
    let digitoVerificador1 = resto < 2 ? 0 : 11 - resto;
  
    // Calcula o segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = soma % 11;
    let digitoVerificador2 = resto < 2 ? 0 : 11 - resto;
  
    // Verifica se os dígitos verificadores estão corretos
    if (parseInt(cpf.charAt(9)) !== digitoVerificador1 || parseInt(cpf.charAt(10)) !== digitoVerificador2) {
      return false;
    }
  
    return true;
  }
  
  const verificarEmail = (email) => {
    // Expressão regular para validar o formato do e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

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