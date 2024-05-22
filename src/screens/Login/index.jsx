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
    }
  };

  return (
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
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
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#E8C185",
    top: 130,
  },
  input: {
    color: "white",
    opacity: 0.9,
    width: 250,
    height: 50,
    fontSize: 20,
    borderRadius: 10,
    paddingLeft: 40,
  },
  button:{
    width: 250,
    height: 50,
    opacity: 0.9,
    backgroundColor: "#E8C185",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
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

});


