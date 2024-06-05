import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cadastro from "../screens/Cadastro";
import Sobrenos from "../screens/SobreNos";

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="sobrenos" component={Sobrenos} />
    </Stack.Navigator>
  );
};

export default StackRoutes;
