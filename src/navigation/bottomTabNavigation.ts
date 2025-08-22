
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// screens
import ContatoScreen from '../screens/contato';
import HomeScreen from '../screens/home';
import ClientesScreen from '../screens/clientes';
import Ionicons from "@expo/vector-icons/Ionicons";

const config = {
    headerShown: false,
    tabBarActiveTintColor: 'tomato', 
    tabBarInactiveTintColor: 'gray',
}
export const BottomTabNavigation = createBottomTabNavigator({
  screenOptions: ({ route }) => ({
      tabBarActiveTintColor: '#00FFFF',
      tabBarInactiveTintColor: 'gray',
      headerShown: false,
    }),
    screens: {
      Home: HomeScreen,
      Clientes:ClientesScreen,
      Profile: ContatoScreen,
    },
  });

