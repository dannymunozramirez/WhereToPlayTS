import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigatorScreens } from './Navigator';
import { ProfileScreen } from '../screens/ProfileScreen';
import { MyTeam } from '../screens/MyTeam';

const MaterialTab = createMaterialBottomTabNavigator();

const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
    return (
        <MaterialTab.Navigator
            activeColor="#2071B2"
            barStyle={{ backgroundColor: 'lightseagreen' }}>
            <Tab.Screen name="Activities" component={NavigatorScreens} options={{
                tabBarLabel: 'Activities',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home" color={color} size={22} />
                ),
            }} />
            <Tab.Screen name="My Team" component={MyTeam} options={{
                tabBarLabel: 'My Team',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="bell" color={color} size={22} />
                ),
            }} />
            <Tab.Screen name="ProfileScreen" component={ProfileScreen} options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="account" color={color} size={22} />
                ),
            }} />
        </MaterialTab.Navigator>
    );
};

// BottomTabsTournament
export const BottomTabsTournament = () => {
    return (
        <MaterialTab.Navigator
            activeColor="#2071B2"
            barStyle={{ backgroundColor: 'lightseagreen' }}>
            <Tab.Screen name="Activities" component={NavigatorScreens} options={{
                tabBarLabel: 'Tournament',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home" color={color} size={22} />
                ),
            }} />
            <Tab.Screen name="My Team" component={MyTeam} options={{
                tabBarLabel: 'Teams',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="bell" color={color} size={22} />
                ),
            }} />
            <Tab.Screen name="Ranking" component={ProfileScreen} options={{
                tabBarLabel: 'Ranking',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="account" color={color} size={22} />
                ),
            }} />
        </MaterialTab.Navigator>
    );
};