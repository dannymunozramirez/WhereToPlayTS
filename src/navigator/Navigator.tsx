import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Login } from '../screens/Login';
import { Test } from '../screens/Test';
import { TestII } from '../screens/TestII';
import { TestIII } from '../screens/TestIII';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const Navigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="TabNavigator" component={TabNavigator} />
        </Stack.Navigator>
    );
};

const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Test" component={Test} />
            <Tab.Screen name="TesII" component={TestII} />
            <Tab.Screen name="TestIII" component={TestIII} />
        </Tab.Navigator>
    );
};
