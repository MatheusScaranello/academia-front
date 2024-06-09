import React, { useState } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
  ImageBackground,
  Alert,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import apiUsuarios from '../../service/Usuarios';
import styles from './styles';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState(true);
  const [msgErro, setMsgErro] = useState('');
  const navigation = useNavigation();

  const logar = async () => {
    try {
      const response = await apiUsuarios.getUsuariosLogin(senha, email);
        navigation.navigate('Main'); // Navigate to the tab navigator
    } catch (error) {
      setErro(true);
      setMsgErro(error.message);
    }
  };


  return (
    <ImageBackground
      source={require('../../../assets/imageLogin.png')}
      style={styles.backgroundImage}
    >
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.container}>
          <Text style={styles.title}>Login</Text>

          {erro && (
            <Text style={styles.errorText}>{msgErro}</Text>
          )}

          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
          />

          <TouchableOpacity style={styles.button} onPress={logar}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.registerLink}
            onPress={() => navigation.navigate('Cadastro')}
          >
            <Text style={styles.registerText}>Criar uma nova conta</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
