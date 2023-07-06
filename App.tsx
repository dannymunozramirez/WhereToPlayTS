import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, View } from 'react-native';
import { Navigator } from './src/navigator/Navigator';

export const App = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>

        <Navigator />
      </NavigationContainer>
    </View>


  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Set your desired background color here
  },
});