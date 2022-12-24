import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

import { MaterialIcons } from "@expo/vector-icons";

export default function GoalItem(props) {
  return (
    <View style={styles.goalItems}>
      <Pressable
        android_ripple={{ color: "#ddd" }}
        onPress={props.onPress.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <View style={styles.delete}>
          <Text style={styles.goalText}>{props.text}</Text>
          <MaterialIcons name="delete" size={24} color="#f31282" />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItems: {
    borderWidth: 1,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderStyle: "dashed",
    borderRadius: 5,
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    width: "80%",
    padding: 10,
  },
  delete: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
