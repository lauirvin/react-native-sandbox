import { RootStackParamList } from './RootStackParamList';

export interface ScreenDetails {
  title: string;
  screen: keyof RootStackParamList;
}
