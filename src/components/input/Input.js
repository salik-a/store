import React from "react";
import { View, Text, SafeAreaView, TextInput } from "react-native";

import styles from './InputStyle'

const Input = ({ placeholder, onChangeText, value }) => {
    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
            />
        </SafeAreaView>
    );
};

export default Input;