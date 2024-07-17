import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import Boton from '../components/Boton.jsx';

//
//
//
export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("./assets/queen.jpg")}
        style={styles.startimage}
        resizeMethod="cover"
      >
        <View style={styles.componentContainer}>
          <View style={{ paddingTop: 320 }}>
            <Text style={styles.text}> Bienvenido a la Base</Text>
            <Text style={styles.text}> de Datos</Text>
            <Text style={styles.text}> Rock Fundadores</Text>
          </View>

          <View style={[styles.buttonContainer]}>
            <Boton
              title="Comenzar"
              onPress={() => navigation.navigate("Decide")}
              containerStyle={{backgroundColor: 'black', borderRadius: 10, height: 50, alignItems: 'center', justifyContent: 'center', width: '90%'}}
              textStyle={{color: 'white', fontSize: 20}}
              />
          </View>

        </View>

        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.8)"]}
          style={styles.gradient}
        />
      </ImageBackground>
    </SafeAreaView> // view son divs  y text son p
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
    width: "100%",
    zIndex: 1,
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },

  buttonContainer: {
    alignItems: "center",
    width: "100%",
    paddingTop: 10,
    paddingBottom:  100 , 
    borderRadius:10,
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
