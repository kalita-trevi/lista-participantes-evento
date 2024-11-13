import React from "react";

import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./style";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}> Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2024</Text>
    </View>
  );
};

export default Header;
