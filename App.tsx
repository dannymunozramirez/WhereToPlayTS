import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet, View } from 'react-native';
import { SideMenu } from './src/navigator/SideMenu';
import { Navigator } from './src/navigator/Navigator';
import LinearGradient from 'react-native-linear-gradient';
import { Provider } from "react-redux";
import store from "./src/store/index";


export const App = () => {

  const gradientColors = ['lightgreen', 'transparent'];

  return (
    <>
      <Provider store={store}>
        <View style={styles.container}>
          <NavigationContainer >
            <Navigator />
            {/* <SideMenu/> */}
          </NavigationContainer>
        </View>
      </Provider>
    </>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'black', // Set your desired background color here
  },
});