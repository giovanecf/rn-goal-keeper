import React, { useState } from "react";
import { View, StyleSheet, Button, TextInput, Modal } from "react-native";

const InputObjetivo = (props) => {
  const [objetivoInserido, setObjetivoInserido] = useState("");

  function objetivoInseridoHandler(enteredText) {
    setObjetivoInserido(enteredText);
  }

  return (
    <Modal visible={props.visivel} animationType="slide">
      <View style={styles.topView}>
        <TextInput
          placeholder="Seu NOVO objetivo"
          onChangeText={objetivoInseridoHandler}
          style={styles.textInput}
        />

        <View style={styles.botoes}>
          <View style={styles.botao}>
            <Button
              title="Voltar"
              color="rgb(150, 150, 150)"
              onPress={props.onVoltarPressed.bind(this, false)}
            />
          </View>

          <View style={styles.botao}>
            <Button
              style={styles.botao}
              title="Add"
              color="rgb(46, 204, 113)"
              onPress={props.onAddObjetivo.bind(this, objetivoInserido)}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  textInput: {
    margin: 16,
    padding: 8,
    width: "80%",
    borderColor: "rgba(53, 171, 183, 1)",
    borderWidth: 1.5,
    borderRadius: 7,
    backgroundColor: "#FFF",
  },

  topView: {
    backgroundColor: "#FFF",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  botoes: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  botao: {
    marginStart: 32,
    width: "40%",
  },
});

export default InputObjetivo;
