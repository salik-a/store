
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback, Animated } from 'react-native';
import styles from './ProductCardStyle'
const ProductCard = ({ product, onSelect ,transform }) => {
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <Animated.View style={[...transform],styles.container}>
                <Image style={styles.image} source={{ uri: product.image }} />
                <View style={styles.body_container}>
                    <Text style={styles.title}>{product.title}</Text>
                    <Text style={styles.price}>{product.price} $</Text>
                </View>
            </Animated.View>
        </TouchableWithoutFeedback>

    );
};



export default ProductCard;