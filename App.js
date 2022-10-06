import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./screens/Login";
import Register from "./screens/Register";
import Home from "./screens/Home";
import Categories from './screens/Categories';
import AddBook from './screens/Addbook';
const Stack = createNativeStackNavigator();
export default function App(){
  return(
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
          name = 'login' component={Login}
          options={{headerShown: false}}
          />
          <Stack.Screen
          name = 'register' component={Register}
          options={{headerShown: false}}
          />
          <Stack.Screen
          name = 'home' component={Home}
          options={{headerShown: false}}
          />
          <Stack.Screen
          name = 'addbook' component={AddBook}
          options={{headerShown: false}}
          />
          <Stack.Screen
          name = 'categories' component={Categories}
          options={{headerShown: false}}
          />
        </Stack.Navigator>
    </NavigationContainer>
  )
};

