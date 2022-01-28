import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* ---------------- Types ---------------- */
import { ScreenDetails } from '../types/ScreenDetails';

/* ---------------- Screens ---------------- */
import HomeScreen from '../screens/HomeScreen';
import UseIdleScreen from '../screens/UseIdleScreen';

export const screens: ScreenDetails[] = [
  {
    title: 'useIdle',
    screen: 'useIdle',
  },
];

const Stack = createNativeStackNavigator();

const Router = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="useIdle" component={UseIdleScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Router;
