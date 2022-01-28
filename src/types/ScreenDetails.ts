import { FC } from 'react';
import { NavigationProps } from './NavigationProps';
import { RootStackParamList } from './RootStackParamList';

export interface ScreenDetails {
  title: string;
  name: keyof RootStackParamList;
  component: FC<NavigationProps> | FC;
  description?: string;
}
