import React from 'react'
import { Pressable, View, Text, StyleSheet } from 'react-native'
import { GameInterface, UserInterface } from '../interfaces/Interfaces'

interface Props {
    user: UserInterface;
    game: GameInterface;
}
// Add interface User - Game 
export const EventCard = ({ user, game }: Props) => {

    return (
        <Pressable>
            <View style={styles.userContainer}>
                <View style={styles.goalItem} >
                    {/* itemData is an inner property */}
                    <Text style={styles.goalText}>
                        Organizer name: {user.name}

                    </Text>

                    <Text style={styles.goalText}>Game Details {game.name}
                    </Text>

                    <Text style={styles.goalText}>Details III</Text>
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
        backgroundColor: 'blue'
    },
    goalText: {
        color: "white",
    },
    userContainer: {
        flex: 1,
        marginTop: 30
    }
});