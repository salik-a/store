import React from 'react';
import { Text, View, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/loading/Loading';
import Error from '../../components/error/Error';


const Details = ({ route }) => {

  const { id } = route.params;
  const {loading, data, error} = useFetch("https://fakestoreapi.com/products"+'/'+id)
  
  if (loading) {
    return <Loading source={require('../../assets/loading.json')} autoPlay loop />;
  }

  if (error) {
    return <Error source={require('../../assets/error.json')} autoPlay loop />;
  }

  return (
    <ScrollView style={{ backgroundColor: 'white',flex:1}}>
      <View style={styles.container} >
        <Image style={styles.image} source={{ uri: data.image }}/>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.description}>{data.description}</Text>
        <Text style={styles.price}>{data.price} $</Text>
      </View>
    </ScrollView>
      
   
    
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
    flex:1,
  },
  image: {
    width: Dimensions.get('window').width-20,
    height: Dimensions.get('window').height / 2,
    padding: 10,
    resizeMode: 'contain',
    backgroundColor: 'white'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 32,
    marginTop:20
  },
  description: {
    fontStyle: 'italic',
    fontSize: 22,
    marginTop:10
  },
  price: {
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 10,
    textAlign: 'right',
    marginEnd: 10,
    color:'red'
  },
  
})

export default Details;