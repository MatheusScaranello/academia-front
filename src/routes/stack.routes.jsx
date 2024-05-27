import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../screens/Login";
import TodosExercicios from "../screens/TodosExercicios";
import Exercicio from "../screens/Exercicio";
import Treino from "../screens/Treino";
import Agenda from "../screens/Agenda";
import AulaDetalhes from "../screens/AulaDetalhes";

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Agenda"
        component={Agenda}
        options={{ title: "Agenda de Aulas" }}
      />
      <Stack.Screen
        name="AulaDetalhes"
        component={AulaDetalhes}
        options={{ title: "Detalhes da Aula" }}
      />
    </Stack.Navigator>
  );
};

export default StackRoutes;
