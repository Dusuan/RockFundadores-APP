import React, { useEffect } from "react";
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
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
const DropdownWithIMGButton = ({selectedValue, setSelectedValue}) => {

  const options = [
    { label: `DEFAULT`, value: " " },
    { label: `CD's`, value: "CD" },
    { label: "Viniles", value: "Vinilo" },
    { label: "Casetes", value: "Casette" },
    { label: "Camisas", value: "Camisa" },
    { label: "Películas", value: "Película" },
    { label: "Artista", value: "Artista" },
    { label: "Mayor que", value: "menor" },
    { label: "Menor que", value: "mayor" },

  ];
  return (
    <View>
      <Picker
        key ={selectedValue}
        selectedValue={selectedValue}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
        style={styles.picker}
      >
        {options.map((option) => (
          <Picker.Item
            key={option.value}
            label={option.label}
            value={option.value}
          />
        ))}
      </Picker>
    </View>
  );
};

const IMGBoton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Text>...</Text>
    {/* <Image
        style ={styles.butimage}
        source={require("../assets/filtericon.png")}
        resizeMode="contain"
      /> */}
  </TouchableOpacity>
);

const Producto = ({ item }) => {
  return (
    <View style={styles.productoInsano}>
      <View style={styles.hilera}>
        <Text style={{ marginRight: 20, flex: 1 }}>{item.name}</Text>
        <Text style={{ flex: 1 }}> ${item.price}</Text>
        <Text>{item.producto_artista_tipo.id_tipo_producto.name}</Text>
      </View>
      <View style={styles.hilera}>
        <Text style={[{ marginRight: 37 }, { flex: 1 }, { color: "grey" }]}>
          {item.producto_artista_tipo.id_artista.name}
        </Text>

        <View
          style={[
            { backgroundColor: "lightgrey" },
            { flex: 1 },
            { flexGrow: 3 },
            { height: 70 },
            { paddingTop: 10 },
            { paddingLeft: 10 },
          ]}
        >
          <Text>{item.description}</Text>
        </View>
      </View>
      <View
        style={[
          { backgroundColor: "#E0E0E0" },
          { width: "100%" },
          { height: 1 },
        ]}
      >
        <Text></Text>
      </View>
    </View>
  );
};

const Search = ({ navigation }) => {
  const [text, onChangeText] = useState(""); //TODO: esto es un hook, buscar como usarlo bien, la verdad solo entiendo que es un destructuring !!!
  const [products, setProducts] = useState([]);
  const [selectedValue, setSelectedValue] = useState(" ");
  json = [];

  const getAllProducts = async (text, selectedValue) => {
   if(selectedValue === "Artista"){}
   
   else if(selectedValue === "menor"){}
    else if(selectedValue === "mayor"){}
    else{
    try {
      const response = await fetch(`http://secret/product/?name=${text}&tipo=${selectedValue}`);
      while (!response.ok) {
        return json
      }
      json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
      return json;
    }
  }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await getAllProducts(text, selectedValue);
        setProducts(productsData);
    };
    fetchProducts();
  }, [text, selectedValue]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.text, { fontSize: 25 }]}>Artículos</Text>
      </View>

      <View style={styles.searchFilter}>
        <TextInput
          style={styles.input}
          placeholder="Buscar"
          onChangeText={onChangeText}
        />
        <View style={styles.ButtonsContainer}>
          <DropdownWithIMGButton selectedValue={selectedValue} setSelectedValue={setSelectedValue}/>
        </View>
      </View>

      <FlatList
        data={products}
        renderItem={({ item }) => <Producto item={item} />}
        keyExtractor={(item) => item.id}
        ListFooterComponent={<View style={{ height: 30 }}></View>}
      />
    </SafeAreaView>
  );
};
/*
{
  "name": "Vessel",  // Replace with the desired Travis Scott album name
  "description": "Nuevo album de top en no tan perfecto estado",  // Update description for the album
  "price": 300,  // Replace with the actual price
  "image": "clancy.jpg",  // Replace with the filename or path to the album image
  "producto_artista_tipo": {
    "id_artista": {
      "name": "Twenty one pilots"
    },
    "id_tipo_producto": {
      "name": "CD"  // Replace with the product type (e.g., CD if it's the same)
    }
  }
} */
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
    marginTop: 0,
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
    paddingLeft: 20,
    paddingBottom: 10,
    alignItems: "flex-start",
  },

  searchFilter: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 20,
    paddingLeft: 20,
  },

  table: {},

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
    flex: 1,
    paddingTop: 50,
  },
  text: {
    fontWeight: "bold",
  },
});

export default Search;
