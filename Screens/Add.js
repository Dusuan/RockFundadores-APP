import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";


const Boton = ({title, onPress}) => (
    <TouchableOpacity style = {styles.Buttons} onPress={onPress}>
        <Text style = {styles.buttonText}>
            {title}
        </Text>
    </TouchableOpacity>
);

        /* implementar form de 
        nombre,
        precio,
        descripcion,
        imagen (si hay),
        artista,
        tipo de producto,*/
        


const Add = ({navigation}) => {

                     /* TODO: implementar una combobox */
                    /* FIXME: hacerlo responsive con porsentajes y sv */



    const [text, onChangeText] = React.useState('');    //TODO: esto es un hook, buscar como usalro bien, la verdad solo entiendo que es un destructuring !!!

    return (
        <View style={styles.container}>
            <View style={styles.form}>

                <Text style={{fontSize: 30}}>
                    Agregar Producto
                </Text>


                <View>
                <Text styles={styles.paddingBot}>
                    Nombre
                </Text>
                <TextInput
                style={styles.input}
                placeholder=". . . . ."
                onChangeText={onChangeText}
                />
                </View>
                
                <View>
                <Text>
                    Artista / Banda / Marca
                </Text>
                <TextInput
                style={styles.input}
                placeholder=". . . . ."
                onChangeText={onChangeText}
                />
                </View>

                <View>
                <Text>
                    Precio
                </Text>
                <TextInput
                style={styles.input}
                placeholder=". . . . ."
                onChangeText={onChangeText}
                />
                </View>

                <View>
                <Text>
                    Descripcion
                </Text>
                <TextInput
                style={styles.input}
                placeholder=". . . . ."
                onChangeText={onChangeText}
                />
                </View>
            <View>
                <Text>
                    Tipo de producto
                </Text>
                <Boton 
              title="Seleccionar"
              onPress={() => {console.log("Guardado")}}
            />
            </View>


            </View>

            <View style={styles.button}>

            <Boton
              title="Guardar"
              onPress={() => {navigation.navigate("Search")}}
            />

            </View>
        




        </View>
    );
};

const styles = StyleSheet.create({

    Buttons: {
        backgroundColor: 'black',
        borderRadius: 10,
        padding: 10,
    },
    buttonText: {
        color: 'white',
    },


    paddingBot: {
        paddingBottom: 10,
    },

    input: {
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#E0E0E0',
        paddingLeft: 15,
    },

    form: {   
        paddingTop: 150,
        height: 400,
        rowGap: 40,
        marginLeft: 30,
        marginRight: 30,
        },

    buttonContainer: { 
        zIndex: 1,
    },

    button: {
        marginTop: 400,
        alignItems: 'center',
    },
    container: {
        display: 'flex',
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

export default Add;