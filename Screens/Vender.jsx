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
  Modal,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { Picker } from "@react-native-picker/picker";
import { useState, useEffect } from "react";
const DropdownWithIMGButton = ({selectedValue, setSelectedValue}) => {
  const options = [
    { label: `DEFAULT`, value: " " },
    { label: `CD's`, value: "CD" },
    { label: "Viniles", value: "Vinilo" },
    { label: "Casetes", value: "CASETE" },
    { label: "Camisas", value: "Camisa" },
    { label: "Películas", value: "Movie" },
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

// TODO: Quiero impolementar que identifique el mismo producto con diferentes descripciones, pero al picarle muestre todas las variantes


const eliminadoCorrectamente = () => {
  Alert.alert("Eliminado", "Producto eliminado correctamente", [
    { text: "OK", onPress: () => console.log("OK Pressed") },
  ]);
};

const deleteProduct = async (id, setModalVisible, setFlatListVisible) => {
  const url = `http://secret/product/${id}`;
  try {
    let response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if(response.ok){
      setFlatListVisible(false);
      setModalVisible(true);
    }
  } catch (error) {
    console.error(error);
  }
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

const Producto = ({ item, setModalVisible, setFlatListVisible }) => {
  return (
    <SafeAreaView style={styles.productoInsano}>
      <View style={styles.hilera}>
        <Text style={{ marginRight: 20, flex: 1 }}>{item.name}</Text>
        <Text style={{ flex: 1 }}> ${item.price}</Text>
        <Text>{item.producto_artista_tipo.id_tipo_producto.name}</Text>
        <TouchableOpacity
          onPress={() => {
          deleteProduct(item.id, setModalVisible, setFlatListVisible);
          }}
        >
          <View>
            <Text
              style={[
                { backgroundColor: "darkred" },
                { paddingRight: 20 },
                { paddingLeft: 20 },
                { marginLeft: 20 },
                { borderRadius: 10 },
              ]}
            >
              {" "}
              ---{" "}
            </Text>
          </View>
        </TouchableOpacity>
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
    </SafeAreaView>
  );
};

const Vender = ({ navigation }) => {
  const [text, onChangeText] = React.useState(""); //TODO: esto es un hook, buscar como usarlo bien, la verdad solo entiendo que es un destructuring !!!
  const [products, setProducts] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [flatListVisible, setFlatListVisible] = useState(true);
  const [selectedValue, setSelectedValue] = useState(" ");

  json = [];

  const getAllProducts = async (text, selectedValue) => {
    try {
      const response = await fetch(`http://192.168.100.63:8080/product/?name=${text}&tipo=${selectedValue}`);
      while (!response.ok) {
        return json
      }
      json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
      return json;
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await getAllProducts(text, selectedValue);
      setProducts(productsData);
      
    };
    fetchProducts();
  }, [text, selectedValue] );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.text, { fontSize: 25 }]}>Vender</Text>
      </View>

      <View style={styles.searchFilter}>
        <TextInput
          style={styles.input}
          placeholder="Buscar"
          onChangeText={onChangeText}
        />
        <View style={styles.ButtonsContainer}>
          <DropdownWithIMGButton  selectedValue={selectedValue} setSelectedValue={setSelectedValue}/>
        </View>
      </View>

      {flatListVisible && (<FlatList
        data={products}
        renderItem={({ item }) => <Producto item={item} setModalVisible={setModalVisible} setFlatListVisible={setFlatListVisible}/>}
        keyExtractor={(item) => item.id}
        ListFooterComponent={<View style={{ height: 30 }}></View>}
      />
      )}

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
          setFlatListVisible(true);
        }}
      >
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <View style={{ width: '80%', height: 100, backgroundColor: "black", padding: 20 , borderRadius:10}}>
            <Text style={{color:'white'}}>Producto vendido</Text>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false);
                setFlatListVisible(true);
              }}
            >
              <Text style={{ color: "lightblue", marginTop: 10 }}>Regresar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      
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

export default Vender;
