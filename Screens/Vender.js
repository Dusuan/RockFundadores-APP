import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import {Picker} from '@react-native-picker/picker';
import { useState } from 'react';
const DropdownWithIMGButton = () => {
  const [selectedValue, setSelectedValue] = useState(null);

  const options = [
    { label: `DEFAULT`, value: 'DEFAULT' },
    { label: `CD's`, value: 'CD' },
    { label: 'Viniles', value: 'VINIL' },
    { label: 'Casetes', value: 'CASETE' },
    { label: 'Camisas', value: 'CAMISA' },
    { label: 'Películas', value: 'MOVIE' },
    { label: 'Artista', value: 'ARTISTA' },
    { label: 'Precio', value: 'PRECIO' },
    { label: 'Tiempo', value: 'TIEMPO' },
  ];

  return (
    <View>
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
          style={styles.picker}
        >
          {options.map((option) => (
            <Picker.Item key={option.value} label={option.label} value={option.value} />
          ))}
        </Picker>
    </View>
  );
};


const IMGBoton = ({onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <Text>...
        
    </Text>
      {/* <Image
        style ={styles.butimage}
        source={require("../assets/filtericon.png")}
        resizeMode="contain"
      /> */}
  </TouchableOpacity>
);



const data = [
  { precio: 200, banda: "Los Beatles", descripcion: "Un disco de los Beatles", producto: "The game", cantidad: 4},
  { precio: 150, banda: "Queen", descripcion: "Un disco de Queen", producto: "Bohemian Rhapsody", cantidad: 7},
  { precio: 100, banda: "Led Zeppelin", descripcion: "Un disco de Led Zeppelin" , producto: "Stairway to Heaven", cantidad: 2},
  { precio: 300, banda: "The Rolling Stones", descripcion: "Un disco de los Rolling Stones", producto: "Paint it black", cantidad: 1},
  { precio: 250, banda: "The Doors", descripcion: "Un disco de The Doors", producto: "Light my fire", cantidad: 3},
  { precio: 50, banda: "Pink Floyd", descripcion: "Un disco de Pink Floyd", producto: "Comfortably numb", cantidad: 5},
  { precio: 75, banda: "The Who", descripcion: "Un disco de The Who", producto: "Baba O'Riley", cantidad: 6},
  { precio: 125, banda: "The Eagles", descripcion: "Un disco de The Eagles", producto: "Hotel California", cantidad: 8},
  { precio: 175, banda: "The Police", descripcion: "Un disco de The Police", producto: "Roxanne", cantidad: 9},
  { precio: 225, banda: "The Clash", descripcion: "Un disco de The Clash", producto: "London Calling", cantidad: 10},
  { precio: 275, banda: "The Ramones", descripcion: "Un disco de The Ramones", producto: "Blitzkrieg Bop", cantidad: 11},
  ];

const Producto = ({item}) => {
  return (
    <View style = {styles.productoInsano}>

        <View style = {styles.hilera}>
                <Text style = { {marginRight: 20} }>{item.producto}</Text>
                <Text style = {{flex:1}}> ${item.precio}</Text>
                <Text>Cantidad: {item.cantidad}</Text>
            <TouchableOpacity
            onTouch={()=>{console.log("Minus product")}}
            onLongPress={()=>{}}>
                <View>
                    <Text style={[{backgroundColor: "darkred"}, { paddingRight: 20}, {paddingLeft:20}, {marginLeft:20}, {borderRadius: 10}, ]}> --- </Text>
                </View>
            </TouchableOpacity>
        </View >
         <View style = {styles.hilera}>
                  <Text style = { [{marginRight: 37}, {flex:1}, {color:"grey"}] }>{item.banda}</Text>

                  <View style = {[{backgroundColor: "lightgrey"}, {flex:1} ,{flexGrow:3}, {height: 70}, {paddingTop: 10} , { paddingLeft: 10}]}>
                    <Text>{item.descripcion}</Text>
                  </View>
        </View>
        <View style = {[ { backgroundColor:"#E0E0E0" } , {width: "100%" } , {height: 1}]}>
          <Text></Text>
        </View>

    </View>
  );
};



const Vender = ({ navigation }) => {

  const [text, onChangeText] = React.useState('');    //TODO: esto es un hook, buscar como usarlo bien, la verdad solo entiendo que es un destructuring !!!

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <Text style={[styles.text, {fontSize: 25}]}>VENDER</Text>
      </View>

      <View style={styles.searchFilter}>
        
            <TextInput
                      style={styles.input}
                      placeholder="Buscar"
                      onChangeText={onChangeText}
                      />
                <View style = {styles.ButtonsContainer}>  
                <DropdownWithIMGButton/>
                  </View>    
         
      </View>


      <FlatList
        data={data}
        renderItem={({ item }) => <Producto item={item} />}
        keyExtractor={(item) => item.descripcion}
      />
       
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  picker: {
    height: 50,
    width: 120,
  },
  hilera: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },

  productoInsano: {
    marginTop: 5,
    paddingRight: 11,
    paddingLeft: 11,  
  },

  input: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#E0E0E0",
    padding: 10,
    flex: 1,
  },
  header: {
    paddingLeft : 20,
    paddingBottom: 10,
    alignItems: "flex-start",
  },
  
  searchFilter: { 
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 20,
    paddingLeft: 20,

  },

  table: {
  },

  butimage: {
    width: 25,
    height: 25,
  },

  ButtonsContainer: {
    backgroundColor: "#E0E0E0",
    borderRadius: 10,
    marginLeft: 10,
    paddingLeft: 20,
    paddingRight: 1,
  },
  container: {
    paddingTop: 50,
  },
  text: {
    fontWeight: "bold",
  },

});

export default Vender;
