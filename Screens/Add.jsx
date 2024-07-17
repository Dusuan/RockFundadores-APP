import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { API_KEY } from "@env";

const Boton = ({ title, onPress }) => (
  <TouchableOpacity
    style={[styles.Buttons, styles.smallTopSeparator]}
    onPress={onPress}
  >
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const DropdownWithButton = ({selectedType, setSelectedType}) => {
  const [showPicker, setShowPicker] = useState(false);
  const options = [
    { label: "CD", value: "CD" },
    { label: "Vinil", value: "Vinilo" },
    { label: "Casete", value: "Casette" },
    { label: "Camisa", value: "Camisa" },
    { label: "Película", value: "Película" },
  ];

  return (
    <View>
      <Boton
        title="Mostrar opciones"
        onPress={() => setShowPicker(!showPicker)}
      />

      {showPicker && (
        <Picker
          selectedValue={selectedType}
          onValueChange={(itemValue) => setSelectedType(itemValue)}
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
      )}
    </View>
  );
};

const postAPI = async (name, artist, price, description, type_product) => {
 
 const url = `${API_KEY}/product/newProduct;`;

  const data = {
    name: name,
    description: description,
    price: price,
    image: null, // Or null if you're setting this later
    producto_artista_tipo: {
      id_artista: {
        name: artist,
      },
      id_tipo_producto: {
        name: type_product,
      },
    },
  };

  let response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  let result = await response.json();

  if (!result.ok) {
    throw new Error(`HTTP error! status: ${result.status}`);
  }
  if (result.status === 200) {
    console.warn("Producto agregado con exito");
  } else {
    console.error("Error al agregar producto");
  }
};



const Add = ({ navigation }) => {
  const [name, setName] = React.useState(""); //TODO: esto es un hook, buscar como usalro bien, la verdad solo entiendo que es un destructuring !!!
  const [artist, setArtist] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [selectedType, setSelectedType] = useState(null);

  const validateFields = () => {
        if (!name || !artist || !price || !description || !selectedType) {
      throw new Error('All fields are required');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={[
          { alignItems: "center" },
          { marginBottom: 20 },
          { marginTop: 50 },
        ]}
      >
        <Text style={[{ fontSize: 30 }, {color:"white"} ]}>Agregar Producto</Text>
      </View>

      <View style={styles.form}>
        <View>
          <Text style={[styles.texto]}>Name</Text>
          <TextInput
            style={[styles.input, styles.smallTopSeparator]}
            placeholder=""
            value={name}
            onChangeText={(name) => setName(name)}
          />
        </View>

        <View>
          <Text style = {styles.texto}>Artista / Banda / Marca</Text>
          <TextInput
            style={[styles.input, styles.smallTopSeparator]}
            placeholder=""
            value={artist}
            onChangeText={(artist) => setArtist(artist)}
          />
        </View>

        <View>
          <Text  style = {styles.texto}>Precio</Text>
          <TextInput
            style={[styles.input, styles.smallTopSeparator]}
            placeholder=""
            value={price}
            onChangeText={(price) => setPrice(price)}
          />
        </View>

        <View>
          <Text  style = {styles.texto}>Descripcion</Text>
          <TextInput
            style={[styles.input, styles.smallTopSeparator]}
            placeholder=""
            value={description}
            onChangeText={(descripcion) => setDescription(descripcion)}
          />
        </View>
        <View style={{ alignItems: "flex-start" }}>
          <Text  style = {styles.texto}>Tipo de producto</Text>

          <DropdownWithButton selectedType={selectedType} setSelectedType={setSelectedType} />

        </View>
      </View>

      <View style={[styles.button]}>
        <Boton
          title="Guardar"
          onPress={() => {
            try {
              validateFields();
             postAPI(name, artist, price, description, selectedType);
              navigation.navigate("Decide")
            } catch (e) {
              console.error(e);
            }
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  texto: {
    color: "white",
    fontSize: 18,
  },

  picker: {
    width: 200,
    height: 50,
  },

  smallTopSeparator: {
    marginTop: 8,
  },

  Buttons: {
    backgroundColor: "#605a56",
    borderRadius: 8,
    padding: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "black",
  },

  paddingBot: {
    paddingBottom: 10,
  },

  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#605a56",
    borderColor: "#E0E0E0",
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
    backgroundColor: "#3a3634",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Add;
