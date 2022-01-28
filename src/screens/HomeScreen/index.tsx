import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MainLayout from '../../layout/MainLayout';
import { screens } from '../../router';
import { NavigationProps } from '../../types/NavigationProps';

const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingBottom: 45,
    paddingTop: 5,
  },
  screenItemContainer: {
    backgroundColor: '#f6f8fb',
    borderRadius: 10,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
    padding: 18,
    marginBottom: 15,
  },
  screenItemTitle: {
    fontSize: 20,
    paddingBottom: 10,
    fontWeight: '600',
  },
  screenItemDescription: {
    fontSize: 14,
    color: '#707070',
    lineHeight: 20,
  },
});

const HomeScreen: React.FC<NavigationProps> = ({ navigation }) => (
  <MainLayout title="Home">
    <ScrollView>
      <View style={styles.container}>
        {screens.slice(1).map(({ title, name, description }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(name)}
            style={styles.screenItemContainer}
          >
            <Text style={styles.screenItemTitle}>{title}</Text>
            <Text style={styles.screenItemDescription}>{description}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  </MainLayout>
);

export default HomeScreen;
