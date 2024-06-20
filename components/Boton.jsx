import React from 'react';
import { View, Text,TouchableOpacity } from 'react-native';


const Boton = ({title, onPress, containerStyle, textStyle}) => (
    <TouchableOpacity style={[containerStyle]}  onPress={onPress}>
        <Text style = {textStyle}>
            {title}
        </Text>
    </TouchableOpacity>
);

export default Boton;