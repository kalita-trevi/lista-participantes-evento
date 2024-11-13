import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  FlatList,
  Alert,
} from "react-native";

import Header from "../../components/Header";
import InputNamePar from "../../components/InputNamePar";
import Participantes from "../../components/Participantes";

export default function HomeScreen() {
  const [participants, setParticipants] = useState([
    "flavio",
    "kalita",
    "fernanda",
    "bruno",
    "pedro",
  ]);

  function handleParticipantAdd(name = "") {
    if (participants.includes(name)) {
      return alert("Participante ja existe");
    }

    // Adiciona o participante se ele ainda não estiver na lista
    setParticipants([...participants, name]);
    alert("Você adicionou um participante");
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () => {
          // Remove o participante e atualiza o estado
          setParticipants(
            participants.filter((participant) => participant !== name)
          );
          Alert.alert("Deletado!");
        },
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <Header />
      {/* Supondo que InputNamePar retorne o nome digitado */}
      <InputNamePar onAdd={(name) => handleParticipantAdd(name)} />

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participantes
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>Nenhum participante</Text>
        )}
      />

      <StatusBar barStyle="light-content" hidden={false} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    padding: 32,
    backgroundColor: "black",
  },
  listEmptyText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});
