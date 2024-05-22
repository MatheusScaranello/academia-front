import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TodosExercicios from "../screens/TodosExercicios";

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TodosExercicios" component={TodosExercicios} />
    </Stack.Navigator>
  );
};

export default StackRoutes;
