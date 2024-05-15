import { StyleSheet, Text, TouchableOpacity, View,TextInput } from 'react-native'
import { Feather } from "@expo/vector-icons";
import React, { useState } from 'react';
import apiUsuarios from '../../service/Usuarios'
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigation = useNavigation;

  const [erro, setErro] = useState(false);

  const Logen = async () => {
    try {
      await apiUsuarios.VerificarSenha(senha, email);
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
    <View style={styles.container}>
      <Image
        source={require("./path/to/your/image.jpg")}
        style={styles.backgroundImage}
      />
      <View style={styles.contLoge}>
        <Text style={styles.text}>Faça seu Login</Text>
        <View>
          <Feather name="files" size={20} color="yellow" style={styles.icon} />

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
            name="padlock"
            size={20}
            color="yellow"
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
        <TouchableOpacity onPress={Logen}>
         entrar
        </TouchableOpacity>
      </View>
    </View>
  );
}