import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useIdle from '../../hooks/useIdle';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const UseIdleScreen: React.FC = () => {
  const { isIdle, panResponder } = useIdle({ timeout: 5000 });
  return (
    <View
      style={{ ...styles.container, backgroundColor: isIdle ? 'red' : 'blue' }}
      {...panResponder.panHandlers}
    >
      <Text>UseIdleScreen</Text>
      <Text>{isIdle ? 'User is idle' : 'User is not Idle'}</Text>
    </View>
  );
};

export default UseIdleScreen;
