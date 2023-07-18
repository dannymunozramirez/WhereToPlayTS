import { createStackNavigator } from '@react-navigation/stack';
import { ActivitiesScreen } from '../screens/ActivitiesScreen';
import React from 'react';
import GameDetails from '../screens/GameDetails';
import { MyTeam } from '../screens/MyTeam';
import { LoginForm } from '../screens/LoginForm';
import { SideMenu } from './SideMenu';


const Stack = createStackNavigator();

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