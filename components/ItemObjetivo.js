import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const ItemObjetivo = (props) => {
  return (
    <TouchableOpacity onLongPress={props.aoPrecionarItem.bind(this, props.cod)}>
      <View style={styles.item}>
        <Text style={styles.itemText}>{props.nome}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    width: "95%",
    padding: 10,
    marginVertical: 8,
    marginHorizontal: "2%",
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.6,
    elevation: 4,
  },

  itemText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "rgba(100, 100, 100, 1)",
  },
});

export default ItemObjetivo;
