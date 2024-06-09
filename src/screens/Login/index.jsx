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
import styles from './styles'; // Certifique-se de que o caminho esteja correto

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState(true);
  const [msgErro, setMsgErro] = useState('');
  const navigation = useNavigation();

  const logar = async () => {
    try {
      const response = await apiUsuarios.getUsuariosLogin(senha, email);
      console.log(response);
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
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.contLoge}>
          <Text style={styles.text}>Login</Text>

          {erro && <Text style={styles.textErro}>{msgErro}</Text>}

          <View style={styles.campInput}>
            <Feather name="mail" size={24} color="#E8C185" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              placeholderTextColor="#E8C185"
            />
          </View>
          <View style={styles.campInput}>
            <Feather name="lock" size={24} color="#E8C185" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry
              placeholderTextColor="#E8C185"
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={logar}>
            <Text style={styles.textButton}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.bottom}
            onPress={() => navigation.navigate('Cadastro')}
          >
            <Text style={styles.bottomText}>Criar uma nova conta</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
