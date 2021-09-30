import React from "react";
import { View, Text, SafeAreaView, Image } from "react-native";
import styles from './LoginStyle'
import Input from '../../components/input/Input'
import Button from '../../components/button/Button'
import { Formik } from 'formik';

const Login = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../../assets/shopping.png")} />
            </View>
            <Formik
                initialValues={{ username: '', password: "" }}
                onSubmit={values => console.log(values)}>
                {({ handleChange, handleSubmit, values }) => (
                    <View style={styles.bodyContainer}>
                        <Input placeholder="Kullanıcı adınızı giriniz" value={values.username} onChangeText={handleChange('username')} />
                        <Input placeholder="Şifrenizi giriniz" value={values.password} onChangeText={handleChange('password')} />
                        <Button text="Giriş Yap" onPress={handleSubmit} />
                    </View>
                )}
            </Formik>
        </SafeAreaView>
    );
};

export default Login;