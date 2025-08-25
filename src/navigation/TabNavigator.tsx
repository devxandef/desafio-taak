
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

// screens
import ContatoScreen from '../screens/contato';
import HomeScreen from '../screens/home';
import ClientesScreen from '../screens/clientes';
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#00FFFF',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Clientes') {
            iconName = focused ? 'people' : 'people-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else {
            iconName = 'help-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Clientes" component={ClientesScreen} />
      <Tab.Screen name="Profile" component={ContatoScreen} />
    </Tab.Navigator>
  );
};

