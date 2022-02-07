import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

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

const UserViewPortDetectionScreen: React.FC = () => {
  console.log('');
  return (
    <View style={{ ...styles.container }}>
      <Text style={styles.text}>UserViewPortDetectionScreen</Text>
    </View>
  );
};

export default UserViewPortDetectionScreen;
