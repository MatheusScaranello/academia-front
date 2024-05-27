import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import Header from "../../components/Header";
import styles from "./styles";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const images = [
  {
    image: require("../../../assets/ScarMuscu.png"),
  },
  {
    image: require("../../../assets/ScarCardio.png"),
  },
  {
    image: require("../../../assets/ScarCross.png"),
  },
  {
    image: require("../../../assets/ScarDance.png"),
  },
];

export default function Home() {
  const navigation = useNavigation();
  const [flag, setFlag] = useState(false);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View>
          <Text style={styles.texto}>ScarFit</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {images.map((item, index) => (
            <View style={styles.slide} key={index}>
              <Image source={item.image} style={styles.image} />
            </View>
          ))}
        </ScrollView>
        <View>
          <Image
            style={styles.imgfundo}
            source={require("../../../assets/fundo.png")}
          />
          <View style={styles.divQuadrado}>
            <Text style={styles.textoNoQuadrado}>ScarFit App</Text>
            <Text style={styles.textoNoQuadrado2}>
              Acompanhe o progresso das suas metas, e monte seu proprio treino.
              Treine em casa ou na academia, tenha tudo na palma da mão.
            </Text>
          </View>
        </View>
        {flag ? (
          <View>
            <TouchableOpacity
              onPress={() => setFlag(true)}
              style={styles.botaoVerMais}
            >
              <Text style={styles.textVerMais}>Ver mais</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <TouchableOpacity onPress={() => useNavigation("Categorias")}>
              <Text>Pesquisa em campo</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => useNavigation("SobreNos")}>
              <Text>Equipe especiliazada</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => useNavigation("Categorias")}>
              <Text>Informativo</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}
