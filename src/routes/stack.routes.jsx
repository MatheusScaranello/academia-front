import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";






<<<<<<< HEAD
import Login from "../screens/Login";

import TodosExercicios from "../screens/TodosExercicios";
import Treino from "../screens/Treino";
=======
import Login from '../screens/Login'
import TodosExercicios from "../screens/TodosExercicios"
import Treino from "../screens/Treino"

>>>>>>> b0772f2d2a7121736a4988474f99ccbf67f7b86c

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator>
<<<<<<< HEAD
      <Stack.Screen name="TodosExercicios" component={TodosExercicios} />
=======
      <Stack.Screen name="Home" component={Home} />
       <Stack.Screen name="TodosExercicios" component={TodosExercicios} /> 
      <Stack.Screen name="Exercicio" component={Exercicio} />
>>>>>>> b0772f2d2a7121736a4988474f99ccbf67f7b86c
      <Stack.Screen name="Treino" component={Treino} />
      <Stack.Screen name="Login" component={Login} />
         </Stack.Navigator>
  );
};

export default StackRoutes;
