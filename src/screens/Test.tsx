import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Navigator } from '../navigator/Navigator'
import EntypoIcon from 'react-native-vector-icons/Entypo';

interface Props extends StackScreenProps<any, any> { }

export const Test = ({ navigation }: Props) => {

    return (
        <View>
            
            <TouchableOpacity style={styles.touchableStyle} activeOpacity={0.8}
                // This onPress attribute will address to LoginForm using Stack.Navigator
                onPress={() => navigation.replace('TestII')}
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