import React, { memo, FC } from 'react';
import {
  StyleProp, StyleSheet, Text, TouchableOpacity,
} from 'react-native';

interface Props {
  label: string;
  onPress: () => void;
  style?: StyleProp<any>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#06bbc9',
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    borderRadius: 27.5,
  },
  label: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export const CTAButton: FC<Props> = memo(({ label, onPress, style }) => (
  <TouchableOpacity style={{ ...styles.container, ...style }} onPress={onPress}>
    <Text style={styles.label}>{label}</Text>
  </TouchableOpacity>
));

CTAButton.displayName = 'CTAButton';

export default CTAButton;
