import { createNativeStackNavigator } from "@react-navigation/native-stack";


<<<<<<< HEAD
import SobreNos from "../screens/SobreNos";
import Login from '../screens/Login'
import TodosExercicios from '../screens/TodosExercicios'
import Exercicio from "../screens/Exercicio";
import Treino from "../screens/Treino";


=======

import Home from "../screens/Home";
>>>>>>> 2c4e2d77fb6170444d569b9876a1adc865a7601c

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator>
<<<<<<< HEAD
      <Stack.Screen name="SobreNos" component={SobreNos} />
       <Stack.Screen name="TodosExercicios" component={TodosExercicios} /> 
      <Stack.Screen name="Exercicio" component={Exercicio} />
      <Stack.Screen name="Treino" component={Treino} />
      <Stack.Screen name="Login" component={Login} />
 

</Stack.Navigator>
=======
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
>>>>>>> 2c4e2d77fb6170444d569b9876a1adc865a7601c
  );
};

export default StackRoutes;
