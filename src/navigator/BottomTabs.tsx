import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigatorScreens } from './Navigator';
import { ProfileScreen } from '../screens/ProfileScreen';
import { MyTeam } from '../screens/MyTeam';
import { ChallengeAct } from '../screens/challenge/ChallengeAct';
import { Challenge } from '../screens/challenge/Challenge';
import { ChallengeProfile } from '../screens/challenge/ChallengeProfile';

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

export const BottomTabsChallenge = () => {
    return (
        <MaterialTab.Navigator
            activeColor="#2071B2"
            barStyle={{ backgroundColor: 'lightgreen' }}>
            <Tab.Screen name="Activities" component={ChallengeAct} options={{
                tabBarLabel: 'Challenge Activity',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home" color={color} size={22} />
                ),
            }} />
            <Tab.Screen name="My Team" component={Challenge} options={{
                tabBarLabel: 'Challenge',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="bell" color={color} size={22} />
                ),
            }} />
            <Tab.Screen name="ProfileScreen" component={ChallengeProfile} options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="account" color={color} size={22} />
                ),
            }} />
        </MaterialTab.Navigator>
    );
};


export const BottomTabsOrganizer = () => {
    return (
        <MaterialTab.Navigator
            activeColor="#2071B2"
            barStyle={{ backgroundColor: 'lightseagreen' }}>
            <Tab.Screen name="Activities" component={NavigatorScreens} options={{
                tabBarLabel: 'Game activities',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home" color={color} size={22} />
                ),
            }} />
            <Tab.Screen name="My Team" component={MyTeam} options={{
                tabBarLabel: 'Games organized',
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