import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> React Native</Text> 
      <Text>Sign in into your account</Text>


      <TextInput style={styles.input} placeholder="JhonDoe@gmail.com" />
      <TextInput style={styles.input}placeholder="Password" />



      <StatusBar style="auto"/>
    </View> // view son divs  y text son p






  );
}

const styles = StyleSheet.create({
  container: {
    fontWeight: "bold",
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },

  titulo: {
    fontSize: 60,
  },

  input: {
    width: 200,
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
  },






});
