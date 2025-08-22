import * as React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {BottomTabNavigation} from './bottomTabNavigation';


const RootStack = createNativeStackNavigator({
  screens: {
    Home: {
      screen: BottomTabNavigation,
      options: {
        headerShown: false,
      },
    },
  },
});

export const Navigation = createStaticNavigation(RootStack);
