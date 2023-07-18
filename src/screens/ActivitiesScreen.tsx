import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { EventCard } from '../components/EventCard';
import { GameInterface, UserInterface } from '../interfaces/Interfaces';

interface Props extends StackScreenProps<any, any> { }

export const ActivitiesScreen = ({ navigation, route }: Props) => {

  const gradientColors = ['lightblue', '#2071B2'];

  const [users, setUsers] = useState<UserInterface[]>([
    {
      occupation: 'Test',
      name: 'User I',
      alias: '',
      id: 0,
    },
    {
      occupation: '',
      name: 'User II',
      alias: '',
      id: 1,
    },
    {
      occupation: '',
      name: 'User III',
      alias: '',
      id: 2,
    },
  ]);

  const [games, setGames] = useState<GameInterface[]>([
    {
      id: '0',
      name: 'Game I',
      type: '',
      organizer: users[0],
      address: '',
    }, {
      id: '1',
      name: 'Game II',
      type: '',
      organizer: users[1],
      address: '',
    }, {
      id: '2',
      name: 'Game III',
      type: '',
      organizer: users[2],
      address: '',
    }])

  return (
    <>
      <View style={styles.screen}>
        <LinearGradient
          colors={gradientColors}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{
            borderTopLeftRadius: 4,
            borderBottomLeftRadius: 4,
            flex:1

          }}
        >
          <FlatList
            centerContent
            data={games}
            renderItem={(itemData) => {

              return <EventCard user={itemData.item.organizer} game={itemData.item} navigation={navigation} route={route} />;
            }}
            // It wants a function as a value it automatically receive two parameter
            // items and index. It will get a item key and it will attach that key (id) to the item
            // rendered within the FlatList.
            keyExtractor={(item) => {
              return item.id;
            }}
          />

          <TouchableOpacity
            style={styles.touchableStyle}
            activeOpacity={0.8}
            onPress={() => navigation.replace('LoginForm')}
          >
            <Text style={styles.button}>Go Back!!!</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    // borderWidth: 2,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 100,
  },
  touchableStyle: {
    // marginBottom: 5,
  },
  screen: {
    flex: 1,

  }
});
