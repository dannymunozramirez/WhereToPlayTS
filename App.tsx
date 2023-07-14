import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet, View } from 'react-native';
import { SideMenu } from './src/navigator/SideMenu';
import { Navigator } from './src/navigator/Navigator';

export const App = () => {
  return (

    <View style={styles.container}>
      <NavigationContainer>
        <Navigator />
        {/* <SideMenu/> */}
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