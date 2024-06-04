import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";


const Boton = ({title, onPress}) => (
    <TouchableOpacity style = {styles.Buttons} onPress={onPress}>
        <Text style = {styles.buttonText}>
            {title}
        </Text>
    </TouchableOpacity>
);



const Decide = ({navigation}) => {
    return (
        <View style={styles.container}>
        <ImageBackground
        source={require("../assets/cassetes.jpg")}
        resizeMode="cover"
        style={styles.startimage}
        >


        <View style={[styles.buttonContainer]}>
            <Boton
              title="Buscar"
              onPress={() => navigation.navigate("Search")}
            />
            <Boton
              title="Nuevo Producto"
              onPress={() => navigation.navigate("Add")}
            />
            <Boton
              title="Regresar"
              onPress={() => navigation.navigate("Home")}
            />
        </View>





<LinearGradient
          colors={["transparent", "rgba(0,0,0,0.8)"]}
          style={styles.gradient}
        />
</ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonContainer: { 
        zIndex: 1,
        marginTop: 550,
        width: '100%',
        alignItems: 'center',
    },

    buttonText: {
        fontSize: 20,
        fontFamily:'sans-serif-light',
        color: 'black',
    },

    Buttons: {
        backgroundColor : 'white',
        height: 50,
        width: '90%',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,    
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    startimage: {
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      },
      gradient: {
        position: "absolute",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      },
});

export default Decide;