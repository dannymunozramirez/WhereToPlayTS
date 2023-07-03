import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Test } from '../screens/Test';
import { TestII } from '../screens/TestII';
import { TestIV } from '../screens/TestIV';
import { TestIII } from '../screens/TestIII';



export const Tabs = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Test} />
            <Tab.Screen name="Activity" component={TestII} />
            <Tab.Screen name="Organize" component={TestIII} />
            <Tab.Screen name="Game" component={TestIV} />
        </Tab.Navigator>
    );
}

