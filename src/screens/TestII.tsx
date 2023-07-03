import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'


interface Props extends StackScreenProps<any, any> { }

export const TestII = ({ navigation }: Props) => {
    return (
        <View>
            <Text>
                Test II
            </Text>

            <TouchableOpacity style={styles.touchableStyle} activeOpacity={0.8}
                // This onPress attribute will address to LoginForm using Stack.Navigator
                onPress={() => navigation.replace('Test')}
            >
                <Text style={styles.button} >Go Back...</Text>

            </TouchableOpacity>



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
    }
})