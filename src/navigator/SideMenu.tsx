import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer'
import { TestIII } from '../screens/TestIII';
import { Test } from '../screens/Test';
import { Navigator } from './Navigator';

const Drawer = createDrawerNavigator();

export const SideMenu = () => {
    return (
        <Drawer.Navigator initialRouteName='Navigator'>
            <Drawer.Screen name='Where to play' component={Navigator} />
            <Drawer.Screen name='TestIII' component={TestIII} />
        </Drawer.Navigator>
    )
}