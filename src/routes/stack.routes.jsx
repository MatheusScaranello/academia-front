import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Cadastro from '../screens/Cadastro';
import TabRoutes from './tab.routes.jsx';

const Stack = createStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Main" component={TabRoutes} />
    </Stack.Navigator>
  );
};

export default StackRoutes;
