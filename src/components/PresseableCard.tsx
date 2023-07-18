import React from 'react';
import { Badge, Box, Center, Flex, HStack, Image, Pressable, Spacer, Text, View } from 'native-base';
import { StackScreenProps } from '@react-navigation/stack';
import { UserInterface, GameInterface } from '../interfaces/Interfaces';
import LinearGradient from 'react-native-linear-gradient';

interface Props extends StackScreenProps<any, any> {
    game: GameInterface;
}

export const PresseableCard = ({ game, navigation }: Props) => {

    const uriSoccer = 'https://images.unsplash.com/photo-1551958219-acbc608c6377?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80'

    const handlePress = () => {
        navigation.navigate('GameDetails', { game });
    };

    const gradientColors = ['#71C9CE', '#E3FDFD'];

    return (
        <Pressable onPress={handlePress}>
            {({ isHovered, isFocused, isPressed }) => {
                return (
                    <Box
                        maxW="96"
                        borderWidth="1"
                        borderColor="coolGray.300"
                        shadow="3"
                        bg={isPressed ? 'coolGray.200' : isHovered ? 'coolGray.200' : 'coolGray.100'}
                        p="0"
                        rounded="4"
                        style={{
                            margin: 5,
                            transform: [{ scale: isPressed ? 0.96 : 1 }],
                            backgroundColor: 'white',
                            overflow: 'hidden',
                        }}
                    >
                        <View style={{ flexDirection: 'row' }}>
                            {/* Left side with linear gradient */}
                            <LinearGradient
                                colors={gradientColors}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={{
                                    borderTopLeftRadius: 4,
                                    borderBottomLeftRadius: 4,
                                    width: '60%',
                                }}
                            >
                                {/* Content on the left side */}
                                <View style={{ padding: 10 }}>
                                    <HStack alignItems="center">
                                        <Badge colorScheme="darkBlue" _text={{ color: 'white' }} variant="solid" rounded="4">
                                            Game type
                                        </Badge>
                                        <Spacer />
                                        <Text fontSize={10} color="coolGray.800">
                                            1 month ago
                                        </Text>
                                    </HStack>
                                    <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                                        {game.name}
                                    </Text>
                                    <Text mt="2" fontSize="sm" color="coolGray.700">
                                        {game.organizer.name}
                                    </Text>
                                    <Flex>
                                        {isFocused ? (
                                            <Text mt="2" fontSize={12} fontWeight="medium" textDecorationLine="underline" color="darkBlue.600" alignSelf="flex-start">
                                                Read More go GameDetails
                                            </Text>
                                        ) : (
                                            <Text mt="2" fontSize={12} fontWeight="medium" color="darkBlue.600">
                                                Read More go GameDetails
                                            </Text>
                                        )}
                                    </Flex>
                                </View>
                            </LinearGradient>

                            {/* Picture on the right side */}
                            <Image
                                source={{
                                    uri: uriSoccer,
                                }}
                                alt="Fallback text"
                                style={{
                                    width: '40%',
                                    height: '100%',
                                    resizeMode: 'cover',
                                    borderTopRightRadius: 4,
                                    borderBottomRightRadius: 4,
                                }}
                            />
                        </View>
                    </Box>
                );
            }}
        </Pressable>
    );
};
