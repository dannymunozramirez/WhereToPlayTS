import React from 'react'
import { ActivityIndicator, Pressable, Text, View } from 'react-native'
import { StyleSheet } from 'react-native'

interface Props {
    dataFromAPI: any;
    isLoading: boolean;
}
export const User = ({ dataFromAPI, isLoading }: Props) => {

    if (isLoading) {
        return (
            <View style={{ flex: 1, alignContent: 'center' }}>
                <ActivityIndicator color="red" size={100} />
            </View>
        );
    }
    return (
        // Preseable had a function to delete - it can be for switch screen and show details
        <Pressable>
            <View style={styles.userContainer}>
                <View style={styles.goalItem} >
                    {/* itemData is an inner property */}
                    <Text style={styles.goalText}>

                        {dataFromAPI.name}

                    </Text>

                    <Text style={styles.goalText}>{dataFromAPI.alias}
                    </Text>

                    <Text style={styles.goalText}>{dataFromAPI.occupation}</Text>
                </View>
            </View>
        </Pressable>

    )
}



const styles = StyleSheet.create({
    goalItem: {
        flex: 1,
        marginTop: 10,
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: "#5e0acc",
    },
    goalText: {
        color: "white",
    },
    userContainer: {
        flex: 1,
        marginTop: 30
    }
});