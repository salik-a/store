import React from "react";
import { View, Text, SafeAreaView, TextInput } from "react-native";

import styles from './InputStyle'

const Input = ({ placeholder, onChangeText }) => {
    return (
        <SafeAreaView style={styles.container}>
            <TextInput placeholder={placeholder} onChangeText={onChangeText} />
        </SafeAreaView>
    );
};

export default Input;