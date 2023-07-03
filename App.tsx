import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Tabs } from './src/components/Tabs';
import { Navigator } from './src/navigator/Navigator';

export const App = () => {
  return (
    <NavigationContainer>

      {/* <Navigator /> */}
      <Tabs />

    </NavigationContainer>

  )
}
