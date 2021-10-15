import React, { useState } from "react";
import { View, Text, SafeAreaView, Image, Alert } from "react-native";
import styles from './LoginStyle'
import Input from '../../components/input/Input'
import Button from '../../components/button/Button'
import { Formik } from 'formik';
import usePost from "../../hooks/usePost";
import { useDispatch } from "react-redux"

const Login = () => {
    const { data, loading, error, post } = usePost();
    const dispatch = useDispatch()
    const [user, setUser] = useState()
    const handleLogin = async (values) => {
        await post('https://fakestoreapi.com/auth/login', values)
        setUser(values)
    }
    console.log(user)
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

//const user = { "password": "m38rmF$", "username": "johnd" };