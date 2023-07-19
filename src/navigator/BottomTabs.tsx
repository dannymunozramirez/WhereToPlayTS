import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigatorScreensPlayerZone, NavigatorScreensTeamZone } from './Navigator';
import { ProfileScreen } from '../screens/ProfileScreen';
import { MyTeam } from '../screens/MyTeam';
import { ChallengeAct } from '../screens/challenge/ChallengeAct';
import { Challenge } from '../screens/challenge/Challenge';
import { ChallengeProfile } from '../screens/challenge/ChallengeProfile';
import { Team } from '../screens/team/Team';
import { TeamProfile } from '../screens/team/TeamProfile';
import { Tournament } from '../screens/tournament/Tournament';
import { Text, TouchableOpacity, View } from 'react-native';
import { ModalSearchCard } from '../components/ModalSearchCard';

const MaterialTab = createMaterialBottomTabNavigator();
const CreateNewPlaceholder = () => <View style={{ flex: 1, backgroundColor: 'blue' }} />
const Tab = createBottomTabNavigator();

const modalTest = () => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "transparent",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <TouchableOpacity
                style={{ backgroundColor: "white", padding: 20 }}
                onPress={() => console.log("todo!")}
            >
                <Text>Modal me</Text>
            </TouchableOpacity>
        </View>
    )
}
export const BottomTabsPlayer = () => {
    return (
        <MaterialTab.Navigator
            activeColor="#2071B2"
            barStyle={{ backgroundColor: 'lightseagreen' }}>
            <Tab.Screen name="Activities" component={NavigatorScreensPlayerZone} options={{
                tabBarLabel: 'Activities',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home" color={color} size={22} />
                ),
            }} />


            <MaterialTab.Screen
                name="Create"
                component={CreateNewPlaceholder}
                options={{
                    tabBarLabel: 'Search',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="magnify" color={color} size={22} />
                    ),
                }}
                listeners={({ navigation }: any) => ({
                    tabPress: event => {
                        event.preventDefault();
                        navigation.navigate(ModalSearchCard);
                    }
                })}
            />


            <Tab.Screen name="My Team" component={Team} options={{
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
export const BottomTabsTeam = () => {
    return (
        <MaterialTab.Navigator
            activeColor="#2071B2"
            barStyle={{ backgroundColor: '#9DF3C4' }}>
            <Tab.Screen name="Activities" component={NavigatorScreensTeamZone} options={{
                tabBarLabel: 'Team Zone',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home" color={color} size={22} />
                ),
            }} />
            <Tab.Screen name="My Team" component={MyTeam} options={{
                tabBarLabel: 'Team',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="bell" color={color} size={22} />
                ),
            }} />
            <Tab.Screen name="My Team Profile" component={TeamProfile} options={{
                tabBarLabel: 'My Team Profile',
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
            barStyle={{ backgroundColor: 'lightseagreen' }}>
            <Tab.Screen name="Activities" component={Challenge} options={{
                tabBarLabel: 'Challenge Activity',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home" color={color} size={22} />
                ),
            }} />
            <Tab.Screen name="My Team" component={ChallengeAct} options={{
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
            <Tab.Screen name="Activities" component={NavigatorScreensPlayerZone} options={{
                tabBarLabel: 'Organizer activities',
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

export const BottomTabsTournament = () => {
    return (
        <MaterialTab.Navigator
            activeColor="#2071B2"
            barStyle={{ backgroundColor: 'lightseagreen' }}>
            <Tab.Screen name="Activities" component={Tournament} options={{
                tabBarLabel: 'Tournaments activities',
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