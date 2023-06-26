import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { CompTest } from './src/components/CompTest'
import { Test } from './src/screens/Test'

export const App = () => {
  return (
    <SafeAreaView>
      <Text>
        <Test />
        <CompTest />
      </Text>
    </SafeAreaView>
  )
}
