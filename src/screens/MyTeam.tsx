import { NavigationContainer } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { TeamInterface } from '../interfaces/Interfaces';
// import { Navigator } from '../navigator/Navigator';


interface Props extends StackScreenProps<any, any> { }

export const MyTeam = ({ navigation }: Props) => {
    return (
        <View >
            <Text style={styles.text}>
                MyTeam - Screen

            </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        borderWidth: 2,
        borderColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 100
    },
    touchableStyle: {
        marginBottom: 20
    },
    text: {
        fontSize: 24
    }
})