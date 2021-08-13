
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';

const ProductCard = ({ product, onSelect }) => {
    return (
        <TouchableWithoutFeedback onPress= {onSelect}>
            <View style={styles.container}>
                <Image  style={styles.image} source={{ uri: product.image }} />
                <View style={styles.body_container}>
                    <Text style={styles.title}>{product.title}</Text>
                    <Text style={styles.price}>{product.price} $</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
        
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius:10,
        borderColor: 'gray',
        margin: 10,
        flexDirection: 'row',
        flex: 1,
        
    },
    image: {
        width: 150,
        height: 150,
        margin: 10,
        resizeMode: 'contain',
        backgroundColor: 'white'
    },
    body_container: {
        flex: 1,
        margin: 5,
        justifyContent:'space-around'
    },
    title: {
        fontWeight: 'bold',
        fontSize:18
    },
    price: {
        textAlign: 'right',
        marginEnd: 10,
        fontSize: 16,
        fontStyle: 'italic' 
    }
});

export default ProductCard;