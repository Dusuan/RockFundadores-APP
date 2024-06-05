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


const IMGBoton = ({onPress}) => (
  <TouchableOpacity onPress={onPress}>
      <Image
        style ={styles.butimage}
        source={require("../assets/filtericon.png")}
        resizeMode="contain"
      />
  </TouchableOpacity>
);


const Producto = () => {
  return (
    <View style = {styles.productoInsano}>

        <View style = {styles.hilera}>
                <Text style = { {marginRight: 20} }>Producto</Text>
                <Text style = {{flex:1}}>Precio</Text>
                <Text>Cantidad</Text>
        </View >
         <View style = {styles.hilera}>
                  <Text style = { {marginRight: 37} }>Banda</Text>

                  <View style = {[{backgroundColor: "lightblue"}, {flex:1} , {height: 70}, {paddingTop: 10} , { paddingLeft: 10}]}>
                    <Text>Descripcion</Text>
                  </View>
        </View>
        <View style = {[ { backgroundColor:"#E0E0E0" } , {width: "100%" } , {height: 1}]}>
          <Text></Text>
        </View>

    </View>
  );
};



const Search = ({ navigation }) => {

  const [text, onChangeText] = React.useState('');    //TODO: esto es un hook, buscar como usalro bien, la verdad solo entiendo que es un destructuring !!!

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <Text style={[styles.text, {fontSize: 25}]}>Artículos</Text>
      </View>

      <View style={styles.searchFilter}>
        
            <TextInput
                      style={styles.input}
                      placeholder="Buscar"
                      onChangeText={onChangeText}
                      />
                <View style = {styles.ButtonsContainer}>  
                <IMGBoton
                  onPress={() => navigation.navigate("Search")}
                  />
                  </View>    
         
      </View>


      <Producto/>
      <Producto/>


      

{/* 
      <View styles={styles.table}>
        <FlatList
      
          data={[
            { key: "Devin" },
            { key: "Dan" },
            { key: "Dominic" },
            { key: "Jackson" },
            { key: "James" },
            { key: "Joel" },
            { key: "John" },
            { key: "Jillian" },
            { key: "Jimmy" },
            { key: "Julie" },
          ]}
          renderItem={({ item }) => <Text>{item.key}</Text>}
        />
          
       </View> */}

       


    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

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
    padding: 12,
  },
  container: {
    paddingTop: 50,
  },
  text: {
    fontWeight: "bold",
  },

});

export default Search;
