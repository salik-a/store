// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Products from './pages/products/Products'
import Details from './pages/details/Details'
import Login from './pages/login/Login';

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
        <Stack.Screen
          name="LoginPage"
          component={Login}
          options={{
            headerShown: false

          }}
        />
        <Stack.Screen
          name="ProductPage"
          component={Products}
          options={{
            title: "Store",
            headerStyle: { backgroundColor: "#64b5f6" },
            headerTitleStyle: { color: "white", alignSelf: 'center', textAlign: 'center' },
            headerTitleAlign: 'center',
            headerTintColor: "white"

          }}
        />
        <Stack.Screen
          name="DetailsPage"
          component={Details}
          options={{
            title: "Product",
            headerStyle: { backgroundColor: "#64b5f6" },
            headerTitleStyle: { color: "white" },
            headerTintColor: "white"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;