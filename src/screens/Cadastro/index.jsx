import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import ServiceUsuario from "../../service/Usuario.js";
import { useState } from "react";

export default function Cadastro() {
    const navigation = useNavigation();
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    
    const cadastrar = async () => {
        if (senha !== confirmarSenha) {
            alert("As senhas não conferem");
            return;
        }
        if (!CpfVerify(cpf)) {
            return;
        }
        if (nome === "" || email === "" || cpf === "" || senha === "") {
            alert("Preencha todos os campos");
            return;
        }
        const usuario = {
            nome: nome,
            email: email,
            cpf: cpf,
            senha: senha,
        };
        const response = await ServiceUsuario.cadastrar(usuario);
        if (response.status === 201) {
            alert("Usuário cadastrado com sucesso!");
            navigation.navigate("Home");
        } else {
            alert("Erro ao cadastrar usuário");
        }
    };
    const CpfVerify = (cpf) => {
        // Remove caracteres não numéricos
        cpf = cpf.replace(/[^\d]/g, '');
    
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
    
        // Valida os dígitos verificadores
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
    
        // CPF é válido
        setCpf(cpf);
        return true;
    };
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro</Text>
            <View style={styles.form}>
                <Text style={styles.label}>Nome</Text>
                <TextInput
                    style={styles.input}
                    value={nome}
                    onChangeText={setNome}
                />
                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                />
                <Text style={styles.label}>CPF</Text>
                <TextInput
                    style={styles.input}
                    value={cpf}
                    onChangeText={setCpf}
                />
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
                <TouchableOpacity
                    style={styles.button}
                    onPress={cadastrar}
                >
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("Login")}
                >
                    <Text style={styles.buttonText}>Se já tem cadastro, faça o login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
    }