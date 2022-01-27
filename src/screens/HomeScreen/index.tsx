import React from 'react';
import {Button, Text, View} from 'react-native';
import {useNavigation} from 'react-navigation-hooks';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Navigate"
        onPress={() => navigation.navigate('UseIdleScreen')}>
        Navigate to UseIdleScreen
      </Button>
    </View>
  );
};

export default HomeScreen;
