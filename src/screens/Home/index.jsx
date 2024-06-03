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

const Conteudo = [
  {
    id: 1,
    titulo: "Pesquisa em campo",
    texto:
      "A ScarFit é uma empresa especializada em pesquisa de campo, com o objetivo de trazer informações relevantes para o mercado de trabalho.",
  },
  {
    id: 2,
    titulo: "Equipe especializada",
    texto:
      "Nossa equipe é formada por profissionais altamente qualificados, com experiência em diversas áreas do conhecimento.",
  },
  {
    id: 3,
    titulo: "Informativo",
    texto:
      "A ScarFit disponibiliza informações atualizadas sobre diversos temas, para manter você sempre bem informado.",
},
];
  

export default function Home() {
  const navigation = useNavigation();
  const [Conteudo1On, setConteudo1On] = useState(false);
  const [Conteudo2On, setConteudo2On] = useState(false);
  const [Conteudo3On, setConteudo3On] = useState(false);

  const handleConteudo1 = () => {
    setConteudo1On(!Conteudo1On);
  };
  const handleConteudo2 = () => {
    setConteudo2On(!Conteudo2On);
  }
  const handleConteudo3 = () => {
    setConteudo3On(!Conteudo3On);
  }
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
                onPress={handleConteudo1}
              >
                <Text style={styles.textoBnt}>Pesquisa em campo</Text>
              </TouchableOpacity>
              {
                Conteudo1On && (
                  <View style={styles.Conteudo}>
                    <Text style={styles.textoConteudo}>{Conteudo[0].texto}</Text>
                  </View>
                )
              }
            </View>
            <View style={styles.DivCategorias}>
              <Image
                style={styles.img}
                source={require("../../../assets/icon03.png")}
              />
              <TouchableOpacity
                style={styles.botaoCategorias}
                onPress={handleConteudo2}
              >
                <Text style={styles.textoBnt}>Equipe especializada</Text>
              </TouchableOpacity>
              {
                Conteudo2On && (
                  <View style={styles.Conteudo}>
                    <Text style={styles.textoConteudo}>{Conteudo[1].texto}</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("SobreNos")}>
                      <Text style={styles.textoConteudo}>Saiba mais</Text>
                    </TouchableOpacity>
                  </View>
                )
              }
            </View>
            <View style={styles.DivCategorias}>
              <Image
                style={styles.img}
                source={require("../../../assets/icon02.png")}
              />
              <TouchableOpacity
                style={styles.botaoCategorias}
                onPress={handleConteudo3}
              >
                <Text style={styles.textoBnt}>Informativo</Text>
              </TouchableOpacity>
              {
                Conteudo3On && (
                  <View style={styles.Conteudo}>
                    <Text style={styles.textoConteudo}>{Conteudo[2].texto}</Text>
                  </View>
                )
              }
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}