import React, { useState, useEffect }from 'react';
import { ActivityIndicator, Button, FlatList, SafeAreaView, Text } from 'react-native';
import ProductCard from '../../components/productCard/ProductCard';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/loading/Loading';
import Error from '../../components/error/Error';

const Products = ({navigation}) => {
  
  const {loading, data, error} = useFetch("https://fakestoreapi.com/products")

  const handleCardSelect = (id) => {
    navigation.navigate('DetailsPage',{id})
  }

  const renderProduct = ({ item }) => <ProductCard product={item} onSelect={()=>handleCardSelect(item.id)} />;
  
  if (loading) {
    return <Loading source={require('../../assets/loading.json')} autoPlay loop />;
  }

  if (error) {
    return <Error source={require('../../assets/error.json')} autoPlay loop />;
  }

  return (
    <SafeAreaView>
      <FlatList  data ={data} renderItem={renderProduct} />
    </SafeAreaView>
  );
}

export default Products;