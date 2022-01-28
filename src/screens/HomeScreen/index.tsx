import React from 'react';
import { Button, View } from 'react-native';
import { screens } from '../../router';
import { NavigationProps } from '../../types/NavigationProps';

const HomeScreen: React.FC<NavigationProps> = ({ navigation }) => (
  <View>
    {screens.map(({ title, screen }) => (
      <Button key={screen} title={title} onPress={() => navigation.navigate(screen)} />
    ))}
  </View>
);

export default HomeScreen;
