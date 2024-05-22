<<<<<<< HEAD
import { Text, TouchableOpacity, View,TextInput,Image } from 'react-native'
import { Feather } from "@expo/vector-icons";
import React, { useState } from 'react';
import apiUsuarios from '../../service/Usuarios'
import { useNavigation } from '@react-navigation/native';

import { ScrollView } from 'react-native-gesture-handler';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const[erro, setErro] = useState(false);
  const[msgErro, setMsgErro] = useState('');
  const navigation = useNavigation;


  const Logen = async () => {
    try {
      if(!email || !senha) {
        setErro(true);
        setMsgErro("Preencha todos os campos!");
        return;
      }
      if(senha.length < 6) {
        setErro(true);
        setMsgErro("Senha deve ter no mínimo 6 caracteres!");
        return;
      }
      if(Response.status == 404) {
        setErro(true);
        setMsgErro("Usuario não existe Cadastre-se!");
        return;
      }
      await apiUsuarios.getUsuariosLogin(senha, email);
        console.log('Login realizado com sucesso!');
        navigation.navigate("Home");
        return; 

    } catch (error) {
      console.error('Erro ao verificar senha:', error.message);
      setErro(true);
      setMsgErro("Senha incorreta ou Inexistente CADASTRE-SE!");
=======

import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  StyleSheet,
  ScrollView,
  ImageBackground
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import apiUsuarios from "../../service/Usuarios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState(false);
  const [msgErro, setMsgErro] = useState("");
  const navigation = useNavigation();

  const Logen = async () => {
    try {
      if (!email || !senha) {
        setErro(true);
        setMsgErro("Preencha todos os campos");
        return;
      }
      await apiUsuarios.getUsuariosLogin(senha, email);
      console.log("Login realizado com sucesso!");
      navigation.navigate("Home");
    } catch (error) {
      setErro(true);
      setMsgErro("Usuário não existe, cadastre-se");
>>>>>>> c18d756db4ee70846f3cd0bc3fc5448421cd6677
    }
  };

  return (
<<<<<<< HEAD
    <ScrollView  style={styles.scroll}>
    <View style={styles.container}>
      <Image
        source={require("../../../assets/imageLogin.png")}
        style={styles.backgroundImage}
      />
      <View style={styles.contLoge}>
        <Text style={styles.text}>Faça seu Login</Text>
        <View>
          <Feather name="folder" size={20} color="#E8C185" style={styles.icon} />

          <TextInput
            style={styles.input}
            placeholder="E-mail"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.line} />
        <View>
          <Feather
            name="lock"
            size={20}
            color="#E8C185"
            style={styles.icon}
          />

          <TextInput
            style={styles.input}
            placeholder="Senha"
            value={senha}
            onChangeText={setSenha}
          />
        </View>
        <View style={styles.line} />
        <TouchableOpacity onPress={Logen}
        style={styles.button}
        >
        <Text style={styles.textButton}>entrar</Text> 
        </TouchableOpacity>
        {erro && alert(setMsgErro)}
      </View>
    </View>
    </ScrollView>
  );
}

import { StyleSheet } from "react-native";

=======
    <ImageBackground
      source={require("../../../assets/imageLogin.png")}
      style={styles.backgroundImage}
    >
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <View style={styles.contLoge}>
            <Text style={styles.text}>Faça seu Login</Text>
            <View style={styles.campInput}>
              <Feather
                name="folder"
                size={20}
                color="#E8C185"
                style={styles.icon}
              />
              <TextInput
                style={styles.input}
                placeholder="E-mail"
                placeholderTextColor="#E8C185"
                value={email}
                onChangeText={setEmail}
              />
            </View>
            <View style={styles.line} />
            <View style={styles.campInput}>
              <Feather
                name="lock"
                size={20}
                color="#E8C185"
                style={styles.icon}
              />
              <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor="#E8C185"
                secureTextEntry={true}
                value={senha}
                onChangeText={setSenha}
              />
            </View>
            <View style={styles.line} />
            <Text style={styles.bottomText}>
              Se já tem Cadastro!
              <TouchableOpacity style={styles.bottom}>
                <Text> Faça o Login.</Text>
              </TouchableOpacity>
            </Text>
            <TouchableOpacity onPress={Logen} style={styles.button}>
              <Text style={styles.textButton}>Entrar</Text>
            </TouchableOpacity>
            {erro && <Text style={styles.textErro}>{msgErro}</Text>}
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

>>>>>>> c18d756db4ee70846f3cd0bc3fc5448421cd6677
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
<<<<<<< HEAD
    alignItems: "center", 
    backgroundColor: "black",
  },
  scroll:{
    flex: 1,
    backgroundColor: "black",
  },
  line: {
    width: 300,
    height: 1,
    backgroundColor: "E8C185",
    marginBottom: 10,
  },
  backgroundImage: {
    width: "100%",
    top:0,
    height:300,
    position: "absolute",
  },
 contLoge : {
    backgroundColor: "rgba(0, 0, 0, 0.3)", 
    width: 300,
    height: 400,
=======
    alignItems: "center",
  },

  bottomText: {
    fontSize: 15,
    color: "white",
    marginBottom: 20,
  },
  bottom: {
    color: "#E8C185",
    fontWeight: "bold",
    fontSize: 15,
  },
  line: {
    width: "60%",
    height: 1,
    backgroundColor: "#E8C185",
    marginBottom: 25,
  },
  textErro: {
    color: "red",
    fontSize: 25,
    marginTop: 10,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
  },
  campInput: {
    width: "60%",
    height: "10%",
    marginBottom: 15,
    position: "relative",
  },
  contLoge: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    width: "90%",
    height: "90%",
>>>>>>> c18d756db4ee70846f3cd0bc3fc5448421cd6677
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#E8C185",
<<<<<<< HEAD
    top: 130,
=======
    marginTop: 100,
    marginBottom:20
>>>>>>> c18d756db4ee70846f3cd0bc3fc5448421cd6677
  },
  input: {
    color: "white",
    opacity: 0.9,
<<<<<<< HEAD
    width: 250,
    height: 50,
=======
    width: "90%",
    height: "80%",
>>>>>>> c18d756db4ee70846f3cd0bc3fc5448421cd6677
    fontSize: 20,
    borderRadius: 10,
    paddingLeft: 40,
  },
<<<<<<< HEAD
  button:{
    width: 250,
=======
  button: {
    width: 180,
>>>>>>> c18d756db4ee70846f3cd0bc3fc5448421cd6677
    height: 50,
    opacity: 0.9,
    backgroundColor: "#E8C185",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
<<<<<<< HEAD
    marginTop: 20,
  },
  textButton:{
    opacity: 0.9,
    color: "white",
    fontSize: 20,
  },
  cardError:{
    width: 250,
    height: 50,
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  textErro:{
    color: "red",
    fontSize: 25,
  },

=======
    marginTop: 30,
    top: -30,
  },
  textButton: {
    opacity: 0.9,
    color: "white",
    fontSize: 18,
  },
  text: {
    color: "#E8C185",
    fontSize: 30,
    marginBottom: 70,
    top: 50,
  },
  icon: {
    position: "absolute",
    left: 10,
    top: "50%",
    transform: [{ translateY: -10 }],
  },
>>>>>>> c18d756db4ee70846f3cd0bc3fc5448421cd6677
});


