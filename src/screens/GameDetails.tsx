import { RouteProp } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
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

    const gradientColors = ['lightblue', '#2071B2'];
    return (
        <SafeAreaView style={styles.container} >


            <LinearGradient
                colors={gradientColors}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.linearGradient}
            >
                <ImageBackground
                    source={{ uri: `${game.organizer.name == 'User I' ? uriSoccer : 'https://www.lboro.ac.uk/media/wwwlboroacuk/external/content/research/sti/slide1.png'}` }}
                    style={styles.backgroundImage}
                >
                    <View style={styles.textContainer}>
                        <Text style={styles.detailsTextTitle}>Game Details</Text>
                        <Text style={styles.detailsText}>Game Name: {game.name}</Text>
                        <Text style={styles.detailsText}>Organizer: {game.organizer.name}</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.touchableStyle}
                        activeOpacity={0.8}
                        onPress={() => navigation.goBack()}//GO BACK TO EventCard.TSX
                    >
                        <Text style={styles.button}>Go Back!!!</Text>
                    </TouchableOpacity>

                </ImageBackground>
            </LinearGradient>


        </SafeAreaView>
    );
};

export default React.memo(GameDetails);

const styles = StyleSheet.create({
    textContainer: {
        paddingTop: 0, // Add padding to position the text at the top of the screen
    },
    container: {
        flex: 1,
    },
    linearGradient: {
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
        flex: 1,
        padding: 20, // Add padding to ensure content is visible within the LinearGradient
    },
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
        flex: 1,
        marginTop: 100,
        height: 500
        // resizeMode: 'cover',
        // justifyContent: 'center',
    },
    detailsText: {
        color: '#6120B2',
        fontWeight: 'bold',
        fontSize: 20,
        margin: 5,
    },
    detailsTextTitle: {
        textAlign: 'center',
        color: '#B22028',
        fontWeight: 'bold',
        fontSize: 20,
        margin: 1
    }
});
