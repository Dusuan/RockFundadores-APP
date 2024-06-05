import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from 'react-native-safe-area-context';


const Boton = ({title, onPress}) => (
    <TouchableOpacity style = {[styles.Buttons, styles.smallTopSeparator]} onPress={onPress}>
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
        <SafeAreaView style={styles.container}>
            <View style = {[{alignItems: 'center'}, {marginBottom:20} , {marginTop: 50}]}>
                <Text style={[{fontSize: 30} ]}>
                    Agregar Producto
                </Text>
            </View>

            <View style={styles.form}>


                <View>
                <Text styles={styles.paddingBot}>
                    Name
                </Text>
                <TextInput
                style={[styles.input, styles.smallTopSeparator]}
                placeholder=". . . . ."
                onChangeText={onChangeText}
                />
                </View>
                
                <View>
                <Text>
                    Artista / Banda / Marca
                </Text>
                <TextInput
                style={[styles.input, styles.smallTopSeparator]}
                placeholder=". . . . ."
                onChangeText={onChangeText}
                />
                </View>

                <View>
                <Text>
                    Precio
                </Text>
                <TextInput
                style={[styles.input, styles.smallTopSeparator]}
                placeholder=". . . . ."
                onChangeText={onChangeText}
                />
                </View>

                <View>
                <Text>
                    Descripcion
                </Text>
                <TextInput
                style={[styles.input, styles.smallTopSeparator]}
                placeholder=". . . . ."
                onChangeText={onChangeText}
                />
                </View>
            <View style = {{alignItems: 'flex-start'}}>
                <Text>
                    Tipo de producto
                </Text>
                <Boton 
              title="Seleccionar"
              onPress={() => {console.log("Guardado")}}
            />
            </View>


            </View>

            <View style={[styles.button ]}>
        
            <Boton
              title="Guardar"
              onPress={() => {navigation.navigate("Decide")}}
            />

            </View>
        




        </SafeAreaView>
    );
};

const styles = StyleSheet.create({

    smallTopSeparator: {
        marginTop: 8,
    },
    

    Buttons: {
        backgroundColor: 'black',
        borderRadius: 8,
        padding: 10,
        alignItems: 'center',
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
        paddingTop: 10,
        rowGap: 25,
        marginLeft: 30,
        marginRight: 30,
        },

    buttonContainer: { 
        zIndex: 1,
    },

    button: {   
        marginTop: 50,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 50,

    },
    container: {
        flex: 1,
        justifyContent: 'space-between'

    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
   
});

export default Add;