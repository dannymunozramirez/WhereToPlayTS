import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Test } from '../screens/Test';
import { TestII } from '../screens/TestII';
import { TestIII } from '../screens/TestIII';
import { LoginForm } from '../screens/LoginForm';
import React from 'react';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Activities" component={Test} />
            <Tab.Screen name="My Team" component={TestII} />
            <Tab.Screen name="Games" component={TestIII} />
        </Tab.Navigator>
    );
};

export const TabNavigatorTestII = () => {
    return (
        <Tab.Navigator initialRouteName='My Team'>
            <Tab.Screen name="Activities" component={Test} />
            <Tab.Screen name="My Team" component={TestII} />
            <Tab.Screen name="Games" component={TestIII} />
        </Tab.Navigator>
    );
};

export const TabNavigatorTestIII = () => {
    return (
        <Tab.Navigator initialRouteName='Games'>
            <Tab.Screen name="Activities" component={Test} />
            <Tab.Screen name="My Team" component={TestII} />
            <Tab.Screen name="Games" component={TestIII} />
        </Tab.Navigator>
    );
};

export const Navigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="LoginForm" component={LoginForm} />
            <Stack.Screen name="MainNavigator" component={MainNavigator} />
            <Stack.Screen name="Test" component={Test} />
            <Stack.Screen name="TestII" component={TestII} />
        </Stack.Navigator>
    );
};

const MainNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName='TabNavigator'>
            <Drawer.Screen name='TabNavigator' component={TabNavigator} />
            <Drawer.Screen name='TestII' component={TabNavigatorTestII} />
            <Drawer.Screen name='TestIII' component={TabNavigatorTestIII} />
        </Drawer.Navigator>
    );
};

export const SideMenu = () => {
    return <Navigator />;
};
