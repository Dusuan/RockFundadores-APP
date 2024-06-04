import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  Button,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";




//
//
//

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <ImageBackground
        source={require("../assets/queen.jpg")}
        resizeMode="cover"
        style={styles.startimage}
      >
        <View style={styles.componentContainer}>
          <View style={{ paddingTop: 320 }}>
            <Text style={styles.text}>Bienvenido a la Base</Text>
            <Text style={styles.text}> de Datos</Text>
            <Text style={styles.text}> Rock Fundadores</Text>
          </View>

          <View style={[styles.buttonContainer, { paddingBottom:  100 },  {borderRadius:10}]}>
            <Button
              title="Comenzar"
              onPress={() => navigation.navigate("Decide")}
              color="black"
            />
          </View>

        </View>

        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.8)"]}
          style={styles.gradient}
        />
      </ImageBackground>
    </View> // view son divs  y text son p
  );
}

const styles = StyleSheet.create({
  // containers
  container: {
    fontWeight: "bold",
    flex: 1,
    backgroundColor: "pink",
    justifyContent: "center",
  },

  componentContainer: {
    zIndex: 1,
    flex: 1,
    justifyContent: "space-between",
    alignItems: "flex-bottom",
  },

  buttonContainer: {
    paddingTop: 10,
  },

  // rest of the styles

  text: {
    zIndex: 1,
    fontFamily: "monospace",
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  input: {
    width: 200,
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
  },

  gradient: {
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  startimage: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
