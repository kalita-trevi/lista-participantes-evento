import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerEventImput: {
    width: "100%",
    marginTop: 40,
    marginBottom: 50,
    gap: 8,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  eventImput: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: "#1A1A1A",
    borderRadius: 5,
    backgroundColor: "#1A1A1A",

    fontWeight: "bold",
    fontSize: 19,
  },
  buttonContent: {
    width: 50,
    height: 50,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
  },
  buttonText: {
    fontSize: 24,
    color: "white",
  },
});

export default styles;
