import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Modal, ImageBackground } from 'react-native';
import { GameInterface, UserInterface } from '../interfaces/Interfaces';

interface Props extends StackScreenProps<any, any> {
    user: UserInterface;
    game: GameInterface;
}

export const EventCard = ({ user, game, navigation }: Props) => {
    const uriSoccer = 'https://images.unsplash.com/photo-1551958219-acbc608c6377?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80'

    const handlePress = () => {
        navigation.navigate('GameDetails', { game });
    };


    return (
        <View>
            <Pressable onPress={handlePress}>

                <View style={styles.userContainer}>
                    <View style={styles.goalItem}>
                        <ImageBackground
                            source={{ uri: `${game.organizer.name == 'User I' ? uriSoccer : 'https://www.lboro.ac.uk/media/wwwlboroacuk/external/content/research/sti/slide1.png'}` }}
                            style={styles.backgroundImage}
                        >

                            <Text style={styles.goalText}>Organizer name: {user.name}</Text>
                            <Text style={styles.goalText}>Game Details {game.name}</Text>
                            <Text style={styles.goalText}>Details III</Text>

                        </ImageBackground>
                    </View>
                </View>

            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    userContainer: {
        flex: 1,
        marginTop: 1,
    },
    goalItem: {
        marginTop: 10,
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#20B2AA',

    },
    goalText: {
        color: '#6120B2',
        fontWeight: 'bold'
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        // backgroundColor:'white'
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 8,
    },
    modalText: {
        marginBottom: 10,
        fontSize: 16,
    },
    closeButton: {
        marginTop: 20,
        alignSelf: 'center',
        backgroundColor: '#20B261',
        padding: 10,
        borderRadius: 6,
    },
    closeButtonText: {
        color: 'white',
        fontSize: 16,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        position: 'relative'
    },
});
