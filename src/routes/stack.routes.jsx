import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Sobrenos from "../screens/SobreNos";







const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator>

      <Stack.Screen name="Sobrenos" component={Sobrenos} />
    </Stack.Navigator>

  );
};

export default StackRoutes;
