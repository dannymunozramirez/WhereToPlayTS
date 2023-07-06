import React from 'react'
import { FlatList, View } from 'react-native'
import { Text } from 'react-native-paper'
import { EventCard } from '../components/EventCard'
import { GameInterface } from '../interfaces/Interfaces'
interface Props {
    game: GameInterface;
}
export const GameDetails = ({ game }: Props) => {
    return (
        <View>
            <Text>Game Details: </Text>
            <Text>{game.name}</Text>
            <Text>{game.address}</Text>
            <Text>{game.organizer.name}</Text>
        </View>
    )
}
