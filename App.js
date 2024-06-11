import React from "react";
import { StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./Screens/Home";
import Decide from "./Screens/Decide";
import Search from "./Screens/Search";
import Add from "./Screens/Add";
import Vender from "./Screens/Vender"

//
//
//

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Decide"
          component={Decide}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Add"
          component={Add}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Sell"
          component={Vender}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    fontWeight: "bold",
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },

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
