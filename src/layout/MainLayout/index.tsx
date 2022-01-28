import React, { memo, FC, ReactNode } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  title?: string;
  children: ReactNode;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
});

export const MainLayout: FC<Props> = memo(({ title, children }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    {children}
  </View>
));

MainLayout.displayName = 'MainLayout';

export default MainLayout;
