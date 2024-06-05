import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import Home from "../screens/Home";
import Cadastro from "../screens/Cadastro";
import Exercicio from "../screens/Exercicio";
import Login from "../screens/Login";
import TodosExercicios from "../screens/TodosExercicios";
import Treino from "../screens/Treino";

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
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          tabBarLabel: "Inicial",
          tabBarActiveTintColor: "#131313",
          tabBarInactiveTintColor: "#D6D6D6",
        }}
      />
      <Tab.Screen
        name="Cadastro"
        component={Cadastro}
        options={{ tabBarButton: () => null }}
      />
      <Tab.Screen
        name="Login"
        component={Login}
        options={{ tabBarButton: () => null }}
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
