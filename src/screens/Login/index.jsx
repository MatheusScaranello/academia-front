import React, { useState } from "react";
import styles from "./styles";
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
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
    }
  };

  return (
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
