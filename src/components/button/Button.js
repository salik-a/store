import React from "react";
import { View, Text, TouchableOpacity } from "react-native";


import styles from './ButtonStyle'

const Button = ({ text, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.title}>{text}</Text>
        </TouchableOpacity>
    );
};

export default Button;