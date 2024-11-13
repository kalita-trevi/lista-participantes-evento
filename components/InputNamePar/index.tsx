import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./style";

type Props = {
  onAdd: (name: string) => void; // agora onAdd aceita o nome como parâmetro
};

const InputNamePar = (props: Props) => {
  const [name, setName] = useState(""); // Estado para armazenar o nome

  return (
    <View style={styles.containerEventImput}>
      <TextInput
        style={styles.eventImput}
        placeholder="   Nome do participante"
        placeholderTextColor={"#808080"}
        value={name}
        onChangeText={setName} // Atualiza o estado com o texto digitado
      />
      <TouchableOpacity
        style={styles.buttonContent}
        onPress={() => {
          props.onAdd(name); // Passa o nome para a função onAdd
          setName(""); // Limpa o campo após adicionar
        }}
      >
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InputNamePar;
