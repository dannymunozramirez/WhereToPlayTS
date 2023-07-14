import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
// import { Navigator } from '../navigator/Navigator';

interface Props extends StackScreenProps<any, any> { }

export const Login = ({ navigation }: Props) => {
    return (
        <View>
            <SafeAreaView>
                <Text>Login</Text>

                <TouchableOpacity
                    style={styles.touchableStyle}
                    activeOpacity={0.8}
                    onPress={() => navigation.replace('TabNavigator')}
                >
                    <Text style={styles.button}>Go!!!</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        // borderWidth: 2,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 100,
    },
    touchableStyle: {
        marginBottom: 20,
    },
});
