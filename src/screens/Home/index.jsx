import React, { useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import Header from "../../components/Header";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import CardCarrossel from "../../components/CardCarroseul/index.jsx";

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
    <ScrollView>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <View>
            <Text style={styles.texto}>ScarFit</Text>
          </View>
          <View style={styles.carrossel}>
            <CardCarrossel />
          </View>
          <View style={styles.fundo}>
            <Image
              style={styles.imgfundo}
              source={require("../../../assets/fundo.png")}
            />
            <View style={styles.divQuadrado}>
              <Text style={styles.textoNoQuadrado}>ScarFit App</Text>
              <Text style={styles.textoNoQuadrado2}>
                Acompanhe o progresso das suas metas, e monte seu proprio
                treino. Treine em casa ou na academia, tenha tudo na palma da
                mão.
              </Text>
            </View>
          </View>
          <View>
            <Text style={styles.textVerMais}>Você sabia?</Text>
          </View>

          <View>
            <View style={styles.DivCategorias}>
              <Image
                style={styles.img}
                source={require("../../../assets/icon01.png")}
              />
              <TouchableOpacity
                style={styles.botaoCategorias}
                onPress={() => navigation.navigate("Categorias")}
              >
                <Text style={styles.textoBnt}>Pesquisa em campo</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.DivCategorias}>
              <Image
                style={styles.img}
                source={require("../../../assets/icon03.png")}
              />
              <TouchableOpacity
                style={styles.botaoCategorias}
                onPress={() => navigation.navigate("SobreNos")}
              >
                <Text style={styles.textoBnt}>Equipe especializada</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.DivCategorias}>
              <Image
                style={styles.img}
                source={require("../../../assets/icon02.png")}
              />
              <TouchableOpacity
                style={styles.botaoCategorias}
                onPress={() => navigation.navigate("Categorias")}
              >
                <Text style={styles.textoBnt}>Informativo</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
