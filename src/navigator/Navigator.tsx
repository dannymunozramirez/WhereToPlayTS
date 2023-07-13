import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Test } from '../screens/Test';
import { TestII } from '../screens/TestII';
import { TestIII } from '../screens/TestIII';
import { LoginForm } from '../screens/LoginForm';
import React from 'react';
import GameDetails from '../screens/GameDetails';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign'


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const MaterialTab = createMaterialBottomTabNavigator();

export const TabNavigator = () => {
    return (
        <MaterialTab.Navigator
            activeColor="#2071B2"
            barStyle={{ backgroundColor: 'lightseagreen' }}>
            <Tab.Screen name="Activities" component={Test} options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
            }} />
            <Tab.Screen name="My Team" component={TestII} options={{
                tabBarLabel: 'Updates',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="bell" color={color} size={26} />
                ),
            }} />
            <Tab.Screen name="Games" component={TestIII} options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="account" color={color} size={26} />
                ),
            }} />
        </MaterialTab.Navigator>
    );
};

export const TabNavigatorTestII = () => {
    return (
        <MaterialTab.Navigator initialRouteName='My Team' activeColor="#2071B2"
            barStyle={{ backgroundColor: 'lightseagreen' }}>
            <Tab.Screen name="Activities" component={Test} options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
            }} />
            <Tab.Screen name="My Team" component={TestII} options={{
                tabBarLabel: 'My Team',
                tabBarIcon: ({ color }) => (
                    <AntDesign name="team" color={color} size={26} />
                ),
            }} />
            <Tab.Screen name="Games" component={TestIII} options={{
                tabBarLabel: 'Games',
                tabBarIcon: ({ color }) => (
                    <MaterialIcons name="sports" color={color} size={26} />
                ),
            }} />
        </MaterialTab.Navigator>
    );
};

export const TabNavigatorTestIII = () => {
    return (
        <MaterialTab.Navigator initialRouteName='Games' activeColor="#2071B2"
            barStyle={{ backgroundColor: 'lightseagreen' }}>
            <Tab.Screen name="Activities" component={Test} options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
            }} />
            <Tab.Screen name="My Team" component={TestII} options={{
                tabBarLabel: 'Updates',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="bell" color={color} size={26} />
                ),
            }} />
            <Tab.Screen name="Games" component={TestIII} options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="account" color={color} size={26} />
                ),
            }} />
        </MaterialTab.Navigator>
    );
};

export const Navigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="LoginForm" component={LoginForm} />
            <Stack.Screen name="MainNavigator" component={MainNavigator} />
            <Stack.Screen name="GameDetailsNavigator" component={GameDetailsNavigator} />
            <Stack.Screen name="Test" component={Test} />
            <Stack.Screen name="TestII" component={TestII} />
            <Stack.Screen name="GameDetails">
                {(props: any) => <GameDetails {...props} />}
            </Stack.Screen>
        </Stack.Navigator>
    );
};

const MainNavigator = () => {
    return (
        <Drawer.Navigator screenOptions={{
            drawerPosition: 'left'
        }} initialRouteName='TabNavigator'>
            <Drawer.Screen name='Home' component={TabNavigator} />
            <Drawer.Screen name='My Team' component={TabNavigatorTestII} />
            <Drawer.Screen name='TestIII' component={TabNavigatorTestIII} />

            <Drawer.Screen name='Local Tournament' component={TabNavigatorTestII} />
            <Drawer.Screen name='Challenge' component={TabNavigatorTestIII} />

            <Drawer.Screen name='Ranking' component={TabNavigatorTestII} />
            <Drawer.Screen name='Store' component={TabNavigatorTestIII} />
        </Drawer.Navigator>
    );
};

const GameDetailsNavigator = () => {
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
