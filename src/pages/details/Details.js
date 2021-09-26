import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/loading/Loading';
import Error from '../../components/error/Error';
import styles from './DetailsStyle'

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


export default Details;