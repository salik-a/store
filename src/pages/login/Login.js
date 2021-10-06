import React from "react";
import { View, Text, SafeAreaView, Image, Alert } from "react-native";
import styles from './LoginStyle'
import Input from '../../components/input/Input'
import Button from '../../components/button/Button'
import { Formik } from 'formik';
import usePost from "../../hooks/usePost";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux"

const Login = ({ navigation }) => {
    const { data, loading, error, post } = usePost();
    const dispatch = useDispatch()

    function handleLogin(values) {
        post('https://fakestoreapi.com/auth/login', values)
        console.log(values)
    }
    if (error) {
        Alert.alert("Dükkan", "Bir hata oluştu")
    }

    if (data) {
        if (data.status === "Error") {
            Alert.alert("Dükkan", "Kullanıcı bulunamadı")
        } else {
            dispatch({ type: "SET_USER", payload: { user } })
            //navigation.navigate("ProductPage")
        }
    }



    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../../assets/shopping.png")} />
            </View>
            <Formik
                initialValues={{ username: '', password: "" }}
                onSubmit={handleLogin}>
                {({ handleChange, handleSubmit, values }) => (
                    <View style={styles.bodyContainer}>
                        <Input placeholder="Kullanıcı adınızı giriniz" value={values.username} onChangeText={handleChange('username')} iconName="account" />
                        <Input placeholder="Şifrenizi giriniz" value={values.password} onChangeText={handleChange('password')} iconName="key" isSecure={true} />
                        <Button text="Giriş Yap" onPress={handleSubmit} loading={loading} />
                    </View>
                )}
            </Formik>
        </SafeAreaView>
    );
};

export default Login;

const user = {
    "address": {
        "geolocation": { "lat": "-37.3159", "long": "81.1496" },
        "city": "kilcoole",
        "street": "new road",
        "number": 7682,
        "zipcode": "12926-3874"
    },
    "id": 1,
    "email": "john@gmail.com",
    "username": "johnd",
    "password": "m38rmF$",
    "name": { "firstname": "john", "lastname": "doe" },
    "phone": "1-570-236-7033",
    "__v": 0
};