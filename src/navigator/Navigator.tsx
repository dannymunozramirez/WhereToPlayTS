import { createStackNavigator } from '@react-navigation/stack';
import { ActivitiesScreen } from '../screens/ActivitiesScreen';
import React from 'react';
import GameDetails from '../screens/GameDetails';
import { MyTeam } from '../screens/MyTeam';
import { LoginForm } from '../screens/LoginForm';
import { SideMenu } from './SideMenu';
import { Team } from '../screens/team/Team';
import { TeamProfile } from '../screens/team/TeamProfile';
import { Challenge } from '../screens/challenge/Challenge';
import { ChallengeAct } from '../screens/challenge/ChallengeAct';
import { ChallengeProfile } from '../screens/challenge/ChallengeProfile';
import { Tournament } from '../screens/tournament/Tournament';


const Stack = createStackNavigator();

// This navigator is placed in App.tsx to manage LoginForm and SideMenu 
export const Navigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="LoginForm" component={LoginForm} />
            <Stack.Screen name="SideMenu" component={SideMenu} />
        </Stack.Navigator>
    );
};

export const NavigatorScreensPlayerZone = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Test" component={ActivitiesScreen} />
            <Stack.Screen name="GameDetails">
                {(props: any) => <GameDetails {...props} />}
            </Stack.Screen>
        </Stack.Navigator>
    );
};

export const NavigatorScreensTeamZone = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Team" component={Team} />
            <Stack.Screen name="MyTeam" component={MyTeam} />
            <Stack.Screen name="My Team Profile" component={TeamProfile} />

            {/* This will give a screen with details could be named
             be TeamDetail perhaps */}
            <Stack.Screen name="GameDetails">
                {(props: any) => <GameDetails {...props} />}
            </Stack.Screen>
        </Stack.Navigator>
    );
};

export const NavigatorScreensChallengeZone = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Challenge" component={Challenge} />
            <Stack.Screen name="Challenge Activity" component={ChallengeAct} />
            <Stack.Screen name="Challenge Profile" component={ChallengeProfile} />
            <Stack.Screen name="GameDetails">
                {(props: any) => <GameDetails {...props} />}
            </Stack.Screen>
        </Stack.Navigator>
    );
};

export const NavigatorScreensOrganizerZone = () => {
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

export const NavigatorScreensTournamentZone = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Tournament" component={Tournament} />
            <Stack.Screen name="MyTeam" component={MyTeam} />
            <Stack.Screen name="GameDetails">
                {(props: any) => <GameDetails {...props} />}
            </Stack.Screen>
        </Stack.Navigator>
    );
};