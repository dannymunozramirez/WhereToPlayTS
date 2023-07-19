import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

interface Props {
    uriPicture: string
}
export const SportsPoster = ({ uriPicture }: Props) => {

    return (
        <View style={styles.imageContainer}>
            <Image source={{ uri: uriPicture }}
                style={styles.image}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        width: 300,
        height: 200,
        borderRadius: 18,
        // backgroundColor: 'red',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,

        elevation: 10,
    },
    image: {
        flex: 1,
        borderRadius: 18
    }
})