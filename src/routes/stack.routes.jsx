import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cadastro from "../screens/Cadastro";

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cadastro" component={Cadastro} />
    </Stack.Navigator>
  );
};

export default StackRoutes;
