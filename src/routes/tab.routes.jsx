import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import Home from '../screens/Home';
import Exercicio from '../screens/Exercicio';
import TodosExercicios from '../screens/TodosExercicios';
import Treino from '../screens/Treino';
import SobreNos from '../screens/SobreNos'; // Import the screen

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="home"
              size={24}
              color={focused ? '#131313' : '#D6D6D6'}
            />
          ),
          tabBarLabel: "Inicial",
          tabBarActiveTintColor: '#131313',
          tabBarInactiveTintColor: '#D6D6D6',
        }}
      />
      <Tab.Screen
        name="SobreNos"
        component={SobreNos} // Add the new screen here
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="info"
              size={24}
              color={focused ? '#131313' : '#D6D6D6'}
            />
          ),
          tabBarLabel: "Sobre Nós",
          tabBarActiveTintColor: '#131313',
          tabBarInactiveTintColor: '#D6D6D6',
        }}
      />
      <Tab.Screen
        name="Exercicio"
        component={Exercicio}
        options={{ tabBarButton: () => null }}
      />
      <Tab.Screen
        name="TodosExercicios"
        component={TodosExercicios}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="list"
              size={24}
              color={focused ? '#131313' : '#D6D6D6'}
            />
          ),
          tabBarLabel: "Exercicios",
          tabBarActiveTintColor: '#131313',
          tabBarInactiveTintColor: '#D6D6D6',
        }}
      />
      <Tab.Screen
        name="Treino"
        component={Treino}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="activity"
              size={24}
              color={focused ? '#131313' : '#D6D6D6'}
            />
          ),
          tabBarLabel: "Treino",
          tabBarActiveTintColor: '#131313',
          tabBarInactiveTintColor: '#D6D6D6',
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;
