import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import Header from '../../components/Header';
import styles from './styles';

const images = [
  {
    image: require("../../../assets/ScarMuscu.png"),
  },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View>
          <Text style={styles.texto}>Home</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {images.map((item, index) => (
            <View style={styles.slide} key={index}>
              <Image source={item.image} style={styles.image} />
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

