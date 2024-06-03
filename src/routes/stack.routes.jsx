import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from '../screens/Login'
<<<<<<< HEAD
import TodosExercicios from "../screens/TodosExercicios"
=======
import TodosExercicios from '../screens/TodosExercicios'
import Treino from "../screens/Treino"
>>>>>>> 89d627591a0180816c03cfa793c8daffc7772ace

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
<<<<<<< HEAD
    <Stack.Navigator>
      <Stack.Screen name="TodosExercicios" component={TodosExercicios} />
=======
    <Stack.Navigator> 
      
      <Stack.Screen name="TodosExercicios" component={TodosExercicios} />
      <Stack.Screen name="Treino" component={Treino} />
>>>>>>> 89d627591a0180816c03cfa793c8daffc7772ace
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default StackRoutes;
