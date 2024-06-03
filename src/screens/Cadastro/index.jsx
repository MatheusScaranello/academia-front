// Importa componentes do React Native
import { View, Text, TouchableOpacity, TextInput } from "react-native";
// Importa o React
import React from "react";
// Importa o hook de navegação do React Navigation
import { useNavigation } from "@react-navigation/native";
// Importa os estilos definidos no arquivo styles.js
import { styles } from "./styles";
// Importa o serviço de usuário para realizar ações relacionadas ao usuário
import ServiceUsuario from "../../service/Usuario.js";
// Importa o hook useState do React
import { useState } from "react";

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
    // Verifica se as senhas coincidem
    if (senha !== confirmarSenha) {
      alert("As senhas não conferem");
      return;
    }
    // Verifica se o CPF é válido
    if (!CpfVerify(cpf)) {
      return;
    }
    // Verifica se todos os campos estão preenchidos
    if (nome === "" || email === "" || cpf === "" || senha === "") {
      alert("Preencha todos os campos");
      return;
    }
    // Cria um objeto usuário com os valores dos campos
    const usuario = {
      nome: nome,
      email: email,
      cpf: cpf,
      senha: senha,
    };
    // Envia os dados para o serviço de cadastro de usuário
    const response = await ServiceUsuario.cadastrar(usuario);
    // Verifica a resposta do servidor
    if (response.status === 201) {
      alert("Usuário cadastrado com sucesso!");
      // Navega para a tela Home se o cadastro for bem-sucedido
      navigation.navigate("Home");
    } else {
      alert("Erro ao cadastrar usuário");
    }
  };

  // Função para verificar se o CPF é válido
  const CpfVerify = (cpf) => {
    // Remove caracteres não numéricos
    cpf = cpf.replace(/[^\d]/g, "");

    // Verifica se o CPF tem 11 dígitos
    if (cpf.length !== 11) {
      alert("CPF inválido");
      return false;
    }

    // Verifica se todos os dígitos são iguais (ex: 111.111.111-11)
    if (/^(\d)\1+$/.test(cpf)) {
      alert("CPF inválido");
      return false;
    }

    // Função interna para validar os dígitos verificadores do CPF
    const validateDigits = (cpf, length) => {
      let sum = 0;
      for (let i = 0; i < length; i++) {
        sum += parseInt(cpf.charAt(i)) * (length + 1 - i);
      }
      let remainder = sum % 11;
      return remainder < 2 ? 0 : 11 - remainder;
    };

    // Verifica o primeiro dígito verificador
    let digit1 = validateDigits(cpf, 9);
    if (digit1 !== parseInt(cpf.charAt(9))) {
      alert("CPF inválido");
      return false;
    }

    // Verifica o segundo dígito verificador
    let digit2 = validateDigits(cpf, 10);
    if (digit2 !== parseInt(cpf.charAt(10))) {
      alert("CPF inválido");
      return false;
    }

    // CPF é válido, atualiza o estado do CPF
    setCpf(cpf);
    return true;
  };

  // Renderiza a interface de cadastro
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <View style={styles.form}>
        <Text style={styles.label}>Nome</Text>
        <TextInput style={styles.input} value={nome} onChangeText={setNome} />
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} value={email} onChangeText={setEmail} />
        <Text style={styles.label}>CPF</Text>
        <TextInput style={styles.input} value={cpf} onChangeText={setCpf} />
        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={true}
        />
        <Text style={styles.label}>Confirmar Senha</Text>
        <TextInput
          style={styles.input}
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
          secureTextEntry={true}
        />
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
  );
}
