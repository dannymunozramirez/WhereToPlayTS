import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import MultiImagePicker from '../../components/CropPickerTest';

export const ModalContent = () => {

    const gradientColors = ['#D7FBE8', '#62D2A2'];
    const [isSelected, setSelection] = useState(false);

    const Selection = () => {
        setSelection(!isSelected)
    }

    return (
        <>

            <View style={styles.container}>
                <View style={styles.checkboxContainer}>
                    <CheckBox
                        checked={isSelected}
                        onPress={Selection}
                        style={styles.checkbox}
                    />
                    <Text style={styles.label}>Do you like React Native?</Text>
                </View>
                <Text>Is CheckBox selected: {isSelected ? '👍' : '👎'}</Text>
                {/* <MultiImagePicker/> */}
            </View>



        </>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkboxContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: 'center',
    },
    label: {
        margin: 8,
    },
});