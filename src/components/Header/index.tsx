import React, { memo, FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  title?: string;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});

export const Header: FC<Props> = memo(({ title }) => (
  <View style={styles.container}>
    <Text>{title}</Text>
  </View>
));

Header.displayName = 'Header';

export default Header;
