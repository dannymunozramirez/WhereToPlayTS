import { RouteProp } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';
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
    const uriSoccer = 'https://images.unsplash.com/photo-1551958219-acbc608c6377?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80'
    const { game } = route.params;

    return (
        <SafeAreaView >
            <View style={styles.screen}>

                <ImageBackground
                    source={{ uri: `${game.organizer.name == 'User I' ? uriSoccer : 'https://www.lboro.ac.uk/media/wwwlboroacuk/external/content/research/sti/slide1.png'}` }}
                    style={styles.backgroundImage}
                >

                    <Text style={styles.detailsTextTitle}>Game Details</Text>
                    <Text style={styles.detailsText}>Game Name: {game.name}</Text>
                    <Text style={styles.detailsText}>Organizer: {game.organizer.name}</Text>

                    <TouchableOpacity
                        style={styles.touchableStyle}
                        activeOpacity={0.8}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={styles.button}>Go Back!!!</Text>
                    </TouchableOpacity>

                </ImageBackground>
            </View>
        </SafeAreaView>
    );
};

export default React.memo(GameDetails);

const styles = StyleSheet.create({
    button: {
        // borderWidth: 2,
        backgroundColor: '#71B220',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 100,
        marginTop: 450,
        borderBottomLeftRadius: 20,
    },
    touchableStyle: {
        marginBottom: 20,
    },
    screen: {
        // flex: 1,
        // marginTop: 50,
        // backgroundColor: 'lightgreen',
        // paddingHorizontal: 20,
        // paddingVertical: 5,
    },
    backgroundImage: {
        flex: -1,
        marginTop: 100,
        height: 500
        // resizeMode: 'cover',
        // justifyContent: 'center',
    },
    detailsText: {
        color: '#6120B2',
        fontWeight: 'bold',
        fontSize: 20,
        margin: 5
    },
    detailsTextTitle: {
        textAlign: 'center',
        color: '#B22028',
        fontWeight: 'bold',
        fontSize: 20,
        margin: 5
    }
});
