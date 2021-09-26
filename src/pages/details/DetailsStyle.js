import { StyleSheet, Dimensions } from "react-native"
export default StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'white',
        flex: 1,
    },
    image: {
        width: Dimensions.get('window').width - 20,
        height: Dimensions.get('window').height / 2,
        padding: 10,
        resizeMode: 'contain',
        backgroundColor: 'white'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 32,
        marginTop: 20
    },
    description: {
        fontStyle: 'italic',
        fontSize: 22,
        marginTop: 10
    },
    price: {
        fontWeight: 'bold',
        fontSize: 24,
        marginTop: 10,
        textAlign: 'right',
        marginEnd: 10,
        color: 'red'
    },

})