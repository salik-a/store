// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Products from './pages/products/Products'
import Details from './pages/details/Details'

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false}}>
        <Stack.Screen name="ProductPage" component={Products} />
        <Stack.Screen name="DetailsPage" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;