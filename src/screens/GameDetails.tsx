import { RouteProp } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { GameInterface } from '../interfaces/Interfaces';

type RootStackParamList = {
    GameDetails: { game: GameInterface };
  };
  
  type GameDetailsRouteProp = RouteProp<RootStackParamList, 'GameDetails'>;
  
  interface Props {
    route: GameDetailsRouteProp;
  }
  
  const GameDetails = ({ route }: Props) => {
    const { game } = route.params;
  
    return (
      <View>
        <Text>Game Details:</Text>
        <Text>Game Name: {game.name}</Text>
        <Text>Organizer: {game.organizer.name}</Text>
      </View>
    );
  };
  
  export default React.memo(GameDetails);