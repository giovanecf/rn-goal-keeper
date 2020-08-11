import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button, Text, Image } from "react-native";

import ItemObjetivo from "./components/ItemObjetivo";
import InputObjetivo from "./components/InputObjetivo";
import Colors from "./constants/colors";

export default function App() {
  const [objetivos, setObjetivos] = useState([]);
  const [inputVisivel, isInputVisivel] = useState(false);

  const objetivosHandler = (nomeObjetivo) => {
    if (nomeObjetivo === "") return;

    setObjetivos((objetivos) => [
      ...objetivos,
      { cod: Math.random().toString(), value: nomeObjetivo },
    ]);

    isInputVisivel(false);
  };

  const voltarHandler = () => {
    isInputVisivel(false);
  };

  const pressHandler = (cod) => {
    setObjetivos((objetivos) => {
      return objetivos.filter((objetivo) => objetivo.cod !== cod);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.barraTop}>
        <Image
          style={styles.image}
          source={require("./assets/goal_keeper_32px.png")}
        />
        <Text style={styles.titulo}>Adicione Seus Objetivos</Text>
      </View>

      <View style={styles.conteudo}>
        <View style={styles.addNovoButton}>
          <Button
            title="+ Novo Objetivo"
            onPress={() => isInputVisivel(true)}
          />
        </View>

        <InputObjetivo
          visivel={inputVisivel}
          onVoltarPressed={voltarHandler}
          onAddObjetivo={objetivosHandler}
        />

        <View>
          <FlatList
            keyExtractor={(item, index) => item.cod}
            data={objetivos}
            renderItem={(itemData) => (
              <ItemObjetivo
                cod={itemData.item.cod}
                aoPrecionarItem={pressHandler}
                nome={itemData.item.value}
              />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    flex: 1,
  },

  image: {},

  barraTop: {
    flexDirection: "row",
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingTop: 36,
    paddingBottom: 12,
  },

  conteudo: {
    marginHorizontal: 8,
    marginVertical: 12,
  },

  titulo: {
    color: Colors.titleInPrimary,
    fontWeight: "bold",
    fontSize: 24,
  },

  addNovoButton: {
    width: "95%",
    marginHorizontal: "2%",
    marginBottom: 12,
  },
});
