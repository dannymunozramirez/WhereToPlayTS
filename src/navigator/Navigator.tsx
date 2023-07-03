import { createStackNavigator } from '@react-navigation/stack';
import { Test } from '../screens/Test';
import { TestII } from '../screens/TestII';

const Stack = createStackNavigator();

export const Navigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Test" component={Test} />
            <Stack.Screen name="TestII" component={TestII} />
        </Stack.Navigator>
    );
}
