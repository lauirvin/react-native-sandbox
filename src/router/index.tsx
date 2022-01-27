import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

/* ----------------- Screens ----------------- */
import HomeScreen from '../screens/HomeScreen';
import UseIdleScreen from '../screens/UseIdleScreen';

export interface RootStackParamList {
  HomeScreen: string;
  UseIdleScreen: string;
}

const screens = {
  HomeScreen: {
    screen: HomeScreen,
  },
  UseIdleScreen: {
    screen: UseIdleScreen,
  },
};

const Stack = createStackNavigator(screens);

const RouterContainer = createAppContainer(Stack);

export default RouterContainer;
