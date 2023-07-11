import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet, View } from 'react-native';
import { Navigator } from './src/navigator/Navigator';

export const App = () => {
  return (

    // Login Screen have to have Navigator container and here just render Login
    <View style={styles.container}>
      <NavigationContainer>
        <Navigator />
        {/* <SideMenu /> */}
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