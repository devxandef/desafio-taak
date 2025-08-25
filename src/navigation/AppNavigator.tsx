import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomTabNavigation } from './TabNavigator';
import NovoCliente from '../screens/clientes/NovoCliente';
import NovoContato from '../screens/contato/NovoContato';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="MainTabs" component={BottomTabNavigation} />
      <Stack.Screen name="NovoCliente" component={NovoCliente} />
      <Stack.Screen name="NovoContato" component={NovoContato} />
    </Stack.Navigator>
  );
};
