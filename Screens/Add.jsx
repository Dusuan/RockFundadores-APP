import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from 'react-native-safe-area-context';
import {Picker} from '@react-native-picker/picker';
import { useState } from 'react';

const Boton = ({title, onPress}) => (
    <TouchableOpacity style = {[styles.Buttons, styles.smallTopSeparator]} onPress={onPress}>
        <Text style = {styles.buttonText}>
            {title}
        </Text>
    </TouchableOpacity>
);
        
      const DropdownWithButton = () => {
            const [selectedValue, setSelectedValue] = useState(null);
            const [showPicker, setShowPicker] = useState(false);
          
            const options = [
              { label: 'CD', value: 'CD' },
              { label: 'Vinil', value: 'VINIL' },
              { label: 'Casete', value: 'CASETE' },
              { label: 'Camisa', value: 'CAMISA' },
              { label: 'Película', value: 'MOVIE' },

            ];
          
            return (
              <View>
                <Boton title="Mostrar opciones" onPress={() => setShowPicker(!showPicker)} />
          
                {showPicker && (
                  <Picker
                    selectedValue={selectedValue}
                    onValueChange={(itemValue) => setSelectedValue(itemValue)}
                    style={styles.picker}
                  >
                    {options.map((option) => (
                      <Picker.Item key={option.value} label={option.label} value={option.value} />
                    ))}
                  </Picker>
                )}
          
                
              </View>
            );
          };


     


const Add = ({navigation}) => {

                     /* TODO: implementar una combobox */

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
                placeholder=""
                onChangeText={onChangeText}
                />
                </View>
                
                <View>
                <Text>
                    Artista / Banda / Marca
                </Text>
                <TextInput
                style={[styles.input, styles.smallTopSeparator]}
                placeholder=""
                onChangeText={onChangeText}
                />
                </View>

                <View>
                <Text>
                    Precio
                </Text>
                <TextInput
                style={[styles.input, styles.smallTopSeparator]}
                placeholder=""
                onChangeText={onChangeText}
                />
                </View>

                <View>
                <Text>
                    Descripcion
                </Text>
                <TextInput
                style={[styles.input, styles.smallTopSeparator]}
                placeholder=""
                onChangeText={onChangeText}
                />
                </View>
            <View style = {{alignItems: 'flex-start'}}>
                <Text>
                    Tipo de producto
                </Text>


                
                <DropdownWithButton/>

         

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

    picker: {
        width: 200,
        height: 50,
    },

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