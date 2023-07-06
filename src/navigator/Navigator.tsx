import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Login } from '../screens/Login';
import { Test } from '../screens/Test';
import { TestII } from '../screens/TestII';
import { TestIII } from '../screens/TestIII';
import { LoginForm } from '../screens/LoginForm';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const Navigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="LoginForm" component={LoginForm} />
            <Stack.Screen name="TabNavigator" component={TabNavigator} />
        </Stack.Navigator>
    );
};

const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Activities" component={Test} />
            <Tab.Screen name="My Team" component={TestII} />
            <Tab.Screen name="Games" component={TestIII} />
        </Tab.Navigator>
    );
};
