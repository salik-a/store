// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from './pages/splash/Splash';
import Products from './pages/products/Products'
import Details from './pages/details/Details'
import Login from './pages/login/Login';
import { useSelector, useDispatch } from "react-redux"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"


const Stack = createNativeStackNavigator();

const Router = () => {
  const userSession = useSelector(s => s.user);
  const isAuthLoading = useSelector(s => s.isAuthLoading);
  const dispatch = useDispatch();

  return (
    <NavigationContainer>
      {isAuthLoading ? (
        <Splash />

      ) : (!userSession ? (

          <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
        <Stack.Screen
          name="LoginPage"
          component={Login}
          options={{
            headerShown: false

          }}
            />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>

              <Stack.Screen
                name="ProductPage"
                component={Products}
                options={{
                  title: "Store",
                  headerStyle: { backgroundColor: "#64b5f6" },
                  headerTitleStyle: { color: "white", alignSelf: 'center', textAlign: 'center' },
                  headerTitleAlign: 'center',
                  headerTintColor: "white",
                  headerRight: () => <Icon name="logout" size={30} color="white" onPress={() => dispatch({ type: "REMOVE_USER" })} />

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
      ))}

    </NavigationContainer>
  );
}

export default Router;