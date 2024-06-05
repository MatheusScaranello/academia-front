import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../screens/Login";

import TodosExercicios from "../screens/TodosExercicios";
import Treino from "../screens/Treino";

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TodosExercicios" component={TodosExercicios} />
      <Stack.Screen name="Treino" component={Treino} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default StackRoutes;
