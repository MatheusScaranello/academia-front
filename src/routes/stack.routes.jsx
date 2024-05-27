import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SobreNos from "../screens/SobreNos";

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SobreNos" component={SobreNos} />
    </Stack.Navigator>
  );
};

export default StackRoutes;
