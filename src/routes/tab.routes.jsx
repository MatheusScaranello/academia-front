import React, { useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import Home from "../screens/Home";
import Cadastro from "../screens/Cadastro";
import Exercicio from "../screens/Exercicio";
import Login from "../screens/Login";
import TodosExercicios from "../screens/TodosExercicios";
import Treino from "../screens/Treino";
import SobreNos from "../screens/SobreNos"; // Importe a tela SobreNos

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Aqui você pode verificar se o usuário está logado ou não.
    // Isso pode ser feito através de uma API, AsyncStorage, Context API, Redux, etc.
    // Exemplo:
    // const checkLoginStatus = async () => {
    //   const loggedIn = await someAsyncCheckLoginFunction();
    //   setIsLoggedIn(loggedIn);
    // };
    // checkLoginStatus();

    // Para este exemplo, vamos apenas simular que o usuário está logado
    const checkLoginStatus = () => {
      const loggedIn = true; // Simule o login
      setIsLoggedIn(loggedIn);
    };
    checkLoginStatus();
  }, []);

  if (isLoggedIn) {
    return (
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="Cadastro"
          component={Cadastro}
        />
        <Tab.Screen
          name="Login"
          component={Login}

        />
      </Tab.Navigator>
    );
  }

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
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          tabBarLabel: "Inicial",
          tabBarActiveTintColor: "#131313",
          tabBarInactiveTintColor: "#D6D6D6",
        }}
      />
      <Tab.Screen
        name="SobreNos"
        component={SobreNos} // Adicione a nova tela aqui
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="info"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          tabBarLabel: "Sobre Nós",
          tabBarActiveTintColor: "#131313",
          tabBarInactiveTintColor: "#D6D6D6",
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
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          tabBarLabel: "Exercicios",
          tabBarActiveTintColor: "#131313",
          tabBarInactiveTintColor: "#D6D6D6",
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
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          tabBarLabel: "Treino",
          tabBarActiveTintColor: "#131313",
          tabBarInactiveTintColor: "#D6D6D6",
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;