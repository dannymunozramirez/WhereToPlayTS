import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Modal } from 'react-native';
import { GameInterface, UserInterface } from '../interfaces/Interfaces';

interface Props extends StackScreenProps<any, any> {
    user: UserInterface;
    game: GameInterface;
}

export const EventCard = ({ user, game, navigation }: Props) => {
    const [modalVisible, setModalVisible] = useState(false);

    const handlePress = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <View>
            <Pressable onPress={handlePress}>
                <View style={styles.userContainer}>
                    <View style={styles.goalItem}>
                        <Text style={styles.goalText}>Organizer name: {user.name}</Text>
                        <Text style={styles.goalText}>Game Details {game.name}</Text>
                        <Text style={styles.goalText}>Details III</Text>
                    </View>
                </View>
            </Pressable>

            <Modal
                visible={modalVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={closeModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>Modal Content</Text>
                        <Text style={styles.modalText}>Game Name: {game.name}</Text>
                        <Text style={styles.modalText}>Organizer: {user.name}</Text>
                        <Pressable onPress={closeModal} style={styles.closeButton}>
                            <Text style={styles.closeButtonText}>Close</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    userContainer: {
        flex: 1,
        marginTop: 30,
    },
    goalItem: {
        marginTop: 10,
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: 'blue',
    },
    goalText: {
        color: 'white',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
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
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 6,
    },
    closeButtonText: {
        color: 'white',
        fontSize: 16,
    },
});
