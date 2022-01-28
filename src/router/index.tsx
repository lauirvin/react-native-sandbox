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
    title: '',
    name: 'HomeScreen',
    component: HomeScreen,
  },
  {
    title: 'useIdle',
    name: 'UseIdleScreen',
    component: UseIdleScreen,
    description: 'Custom React Hook to track idle activity of user',
  },
];

const Stack = createNativeStackNavigator();

const Router = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
      }}
    >
      {screens.map(({ title, name, component }) => (
        <Stack.Screen
          name={name}
          component={component}
          options={{
            title,
          }}
        />
      ))}
    </Stack.Navigator>
  </NavigationContainer>
);

export default Router;
