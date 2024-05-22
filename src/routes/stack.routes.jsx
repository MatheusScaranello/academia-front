import { createNativeStackNavigator } from "@react-navigation/native-stack";


import Login from '../screens/Login'
import TodosExercicios from '../screens/TodosExercicios'

import TodosExercicios from "../screens/TodosExercicios";


const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (

    <Stack.Navigator>  
         <Stack.Screen name="TodosExercicios" component={TodosExercicios} />
      <Stack.Screen name="TodosExercicios" component={TodosExercicios} />
      <Stack.Screen name="Login" component={Login} />

    <Stack.Navigator>
 
    </Stack.Navigator>
  );
};

export default StackRoutes;
