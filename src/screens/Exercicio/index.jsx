import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert, Animated, Share, Clipboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles';

export default function Exercicio({ route }) {
  const navigation = useNavigation();
  const { exercicio } = route.params || {};
  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const handleBackPress = () => {
    Alert.alert('Back', 'Going back to the previous screen.');
    navigation.goBack();
  };

  const handleSharePress = async () => {
    try {
      await Share.share({
        message: `Check out this exercise: ${exercicio.nome}\nDescription: ${exercicio.descricao}`,
      });
    } catch (error) {
      Alert.alert('Error', 'Failed to share exercise. Please try again later.');
    }
  };

  const handleCopyPress = () => {
    Clipboard.setString(`Exercise: ${exercicio.nome}\nDescription: ${exercicio.descricao}`);
    Alert.alert('Copied', 'Exercise details copied to clipboard.');
  };

  if (!exercicio) {
    return (
      <LinearGradient
        colors={['#000000', '#D4AF37']}
        style={styles.container}
      >
        <Text style={styles.errorText}>Erro: Nenhum exercício fornecido.</Text>
        <TouchableOpacity style={styles.button} onPress={handleBackPress}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </LinearGradient>
    );
  }

  return (
    <LinearGradient
    colors={['#000000']}
  style={styles.container}
>
      <Animated.View style={[styles.card, { opacity: fadeAnim }]}>
        <Text style={styles.titulo}>{exercicio.nome}</Text>
        <Text style={styles.descricao}>{exercicio.descricao}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleBackPress}>
            <MaterialIcons name="arrow-back" size={24} color="#fff" />
            <Text style={styles.buttonText}>Voltar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleSharePress}>
            <MaterialIcons name="share" size={24} color="#fff" />
            <Text style={styles.buttonText}>Compartilhar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleCopyPress}>
            <MaterialIcons name="content-copy" size={24} color="#fff" />
            <Text style={styles.buttonText}>Copiar</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </LinearGradient>
  );
}