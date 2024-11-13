import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import styles from "./style";

type Props = {
  name: string;
  onRemove: () => void;
};
const Participantes = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.name}</Text>
      <TouchableOpacity style={styles.buttonContent} onPress={props.onRemove}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Participantes;
