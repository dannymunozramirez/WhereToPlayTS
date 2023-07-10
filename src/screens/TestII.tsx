import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { TeamInterface } from '../interfaces/Interfaces';


interface Props extends StackScreenProps<any, any> { }

export const TestII = ({ navigation }: Props) => {
    return (
        <View >
            <Text style={styles.text}>
                Team

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