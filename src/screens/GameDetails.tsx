import { RouteProp } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import { GameInterface } from '../interfaces/Interfaces';

type RootStackParamList = {
    GameDetails: { game: GameInterface };
};

type GameDetailsRouteProp = RouteProp<RootStackParamList, 'GameDetails'>;

interface Props extends StackScreenProps<any, any> {
    route: GameDetailsRouteProp;
}


const GameDetails = ({ route, navigation }: Props) => {
    const { game } = route.params;

    return (
        <SafeAreaView>
            <View style={styles.screen}>
                <Text>Game Details:</Text>
                <Text>Game Name: {game.name}</Text>
                <Text>Organizer: {game.organizer.name}</Text>

                <TouchableOpacity
                    style={styles.touchableStyle}
                    activeOpacity={0.8}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.button}>Go Back!!!</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default React.memo(GameDetails);

const styles = StyleSheet.create({
    button: {
        // borderWidth: 2,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 100,
        marginTop: 50,
    },
    touchableStyle: {
        marginBottom: 20,
    },
    screen: {
        flex: -1,
        marginTop: 50,
        backgroundColor: 'lightgreen',
        paddingHorizontal: 20,
        paddingVertical: 5,
    }
});
