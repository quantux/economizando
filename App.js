import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from "./Pages/Home/Home";
import Edit from "./Pages/Edit/Edit";
import New from "./Pages/New/New";

/* Cria a pilha de navegação */
const Stack = createStackNavigator();

/* Carrega as páginas Home, Edit, New na pilha */
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false
        }}>
          
        <Stack.Screen
          name="Home"
          component={Home}
        />

        <Stack.Screen
          name="Edit"
          component={Edit}
        />

        <Stack.Screen
          name="New"
          component={New}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;