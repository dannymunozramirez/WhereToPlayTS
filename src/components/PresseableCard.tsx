import React from 'react'
import { Badge, Box, Center, Flex, HStack, Image, Pressable, Spacer, Text, View } from 'native-base';
import { StackScreenProps } from '@react-navigation/stack';
import { UserInterface, GameInterface } from '../interfaces/Interfaces';

interface Props extends StackScreenProps<any, any> {
    game: GameInterface;
}

export const PresseableCard = ({ game, navigation }: Props) => {

    const handlePress = () => {
        navigation.navigate('GameDetails', { game });
    };
    return (
        <View style={{backgroundColor:'white'}}>
            <Pressable onPress={handlePress}>
                {({
                    isHovered,
                    isFocused,
                    isPressed
                }) => {
                    return  <Box maxW="96" borderWidth="1" borderColor="coolGray.300" shadow="3" bg={isPressed ? 'coolGray.200' : isHovered ? 'coolGray.200' : 'coolGray.100'} p="5" rounded="8" style={{
                        backgroundColor:'lightgreen',
                        margin:5,
                        transform: [{
                            scale: isPressed ? 0.96 : 1
                        }]
                    }}>
                        <HStack alignItems="center">
                            <Badge colorScheme="darkBlue" _text={{
                                color: 'white'
                            }} variant="solid" rounded="4">
                                Game type
                            </Badge>
                            <Spacer />
                            <Text fontSize={10} color="coolGray.800">
                                1 month ago
                            </Text>
                        </HStack>
                        <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                            Game Title
                        </Text>
                        <Text mt="2" fontSize="sm" color="coolGray.700">
                            Simple game description
                        </Text>
                        <Center>
                            <Image size={100} alt="fallback text" borderRadius={100} source={{
                                uri: "https://images.unsplash.com/photo-1551958219-acbc608c6377?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"
                            }} fallbackSource={{
                                uri: "https://images.unsplash.com/photo-1551958219-acbc608c6377?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"
                            }} />
                        </Center>
                        <Flex>
                            {isFocused ? <Text mt="2" fontSize={12} fontWeight="medium" textDecorationLine="underline" color="darkBlue.600" alignSelf="flex-start">
                                Read More go GameDetails
                            </Text> : <Text mt="2" fontSize={12} fontWeight="medium" color="darkBlue.600">
                                Read More go GameDetails
                            </Text>}
                        </Flex>
                    </Box>;
                }}
            </Pressable></View>
    )
}


