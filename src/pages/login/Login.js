import React from "react";
import { View, Text, SafeAreaView, Image } from "react-native";
import styles from './LoginStyle'
import Input from '../../components/input/Input'
import Button from '../../components/button/Button'

const Login = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../../assets/shopping.png")} />
            </View>
            <View style={styles.bodyContainer}>
                <Input placeholder="Kullanıcı adınızı giriniz" />
                <Input placeholder="Şifrenizi giriniz" />
                <Button text="Giriş Yap" />
            </View>
        </SafeAreaView>
    );
};

export default Login;