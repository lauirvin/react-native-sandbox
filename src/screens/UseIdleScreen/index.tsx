import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useIdle from '../../hooks/useIdle';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

const UseIdleScreen: React.FC = () => {
  const { isIdle, panResponder } = useIdle({ timeout: 5000 });
  return (
    <View style={{ ...styles.container, backgroundColor: isIdle ? 'red' : 'green' }} {...panResponder.panHandlers}>
      <Text style={styles.text}>{isIdle ? 'User is idle' : 'User is Active'}</Text>
    </View>
  );
};

export default UseIdleScreen;
