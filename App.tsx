import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet, View } from 'react-native';
import { Navigator } from './src/navigator/Navigator';
import { SideMenu } from './src/navigator/SideMenu';

export const App = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        {/* <Navigator /> */}
        <SideMenu />
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