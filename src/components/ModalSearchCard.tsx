import React from 'react'
import { View, Text, Button } from 'react-native'
import { ActivitiesScreen } from '../screens/ActivitiesScreen'
import { ModalContent } from '../screens/modalContent/ModalContent'

export const ModalSearchCard = ({ navigation, route }: any) => {
    return (

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ModalContent/>
            <Button onPress={() => navigation.goBack()} title="Dismiss" />
        </View>
    )
}
