import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props extends StackScreenProps<any, any> {}

export const Test = ({ navigation }: Props) => {
  return (
    <View>
      <Text>Test</Text>
      <TouchableOpacity
        style={styles.touchableStyle}
        activeOpacity={0.8}
        onPress={() => navigation.replace('Login')}
      >
        <Text style={styles.button}>Go Back!!!</Text>
      </TouchableOpacity>
    </View>
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
    marginBottom: 20,
  },
});
