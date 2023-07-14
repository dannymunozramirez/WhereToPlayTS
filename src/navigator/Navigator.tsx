import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { ActivitiesScreen } from '../screens/ActivitiesScreen';
import React from 'react';
import GameDetails from '../screens/GameDetails';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MyTeam } from '../screens/MyTeam';
import { LoginForm } from '../screens/LoginForm';
import { SideMenu } from './SideMenu';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const MaterialTab = createMaterialBottomTabNavigator();

export const Navigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="LoginForm" component={LoginForm} />
            <Stack.Screen name="SideMenu" component={SideMenu} />
        </Stack.Navigator>
    );
};

export const NavigatorScreens = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Test" component={ActivitiesScreen} />
            <Stack.Screen name="MyTeam" component={MyTeam} />
            <Stack.Screen name="GameDetails">
                {(props: any) => <GameDetails {...props} />}
            </Stack.Screen>
        </Stack.Navigator>
    );
};