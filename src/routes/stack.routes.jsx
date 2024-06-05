import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Login from "../screens/Login";
import TodosExercicios from "../screens/TodosExercicios";
import Treino from "../screens/Treino";
import Exercicio from "../screens/Exercicio";

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="TodosExercicios" component={TodosExercicios} />
      <Stack.Screen name="Exercicio" component={Exercicio} />
      <Stack.Screen name="Treino" component={Treino} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default StackRoutes;
