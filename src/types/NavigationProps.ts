import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './RootStackParamList';

export type NavigationProps = NativeStackScreenProps<RootStackParamList, keyof RootStackParamList>;
