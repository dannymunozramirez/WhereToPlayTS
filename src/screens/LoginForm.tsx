import * as React from "react";
import { Box, Heading, VStack, FormControl, Input, Button, Center, Image, NativeBaseProvider } from "native-base";
import { StackScreenProps } from "@react-navigation/stack";
// import api from "../services/AxiosAPI";
import { useState } from "react";

interface Props extends StackScreenProps<any, any> { }

export const LoginForm = ({ navigation }: Props) => {

    const [user, setUser] = useState({
        name: '',
        lastName: ''
    })


    const userNameHandler = (userNameEntered: string) => {
        console.log(userNameEntered + " UserNameEntered")
        user.name = userNameEntered
    }
    const lastNameHandler = (lastNameEntered: string) => {
        console.log(lastNameEntered + " LastNameEntered")
        user.lastName = lastNameEntered
    }



    const submitForm = () => {
        // TODO
        // Create a hook to manage this function
        // api.post('add_user/', user).then((response) => {
        //     console.log(response.data);
        //     navigation.replace('Dashboard')
        // }).catch((error) => {
        //     console.error(error);
        // })

        navigation.replace('SideMenu')
    }

    return (
        <NativeBaseProvider>
            <Center marginTop={20} w="100%">
                <Box>
                    <Image source={{ uri: "https://ec.europa.eu/eurostat/documents/6921402/9104237/Shutterstock_Lisa_Kolbasa.png/f988f8b6-4138-4a91-9761-885bacab0ce2?t=1533725002000" }} alt="Alternate Text" size="xl" />
                </Box>
                <Box safeArea p="2" w="90%" maxW="290" py="8">
                    <Heading size="lg" color="coolGray.800" _dark={{
                        color: "warmGray.50"
                    }} fontWeight="semibold">
                        Welcome
                    </Heading>
                    <Heading mt="1" color="coolGray.600" _dark={{
                        color: "warmGray.200"
                    }} fontWeight="medium" size="xs">
                        Sign up to continue!
                    </Heading>
                    <VStack space={3} mt="5">
                        <FormControl>
                            <FormControl.Label>Username</FormControl.Label>
                            <Input onChangeText={(text) => userNameHandler(text)} />
                        </FormControl>
                        <FormControl>
                            <FormControl.Label>Password</FormControl.Label>
                            <Input onChangeText={(text) => lastNameHandler(text)} type="password" />
                        </FormControl>
                        {/* <FormControl>
                            <FormControl.Label>Confirm Password</FormControl.Label>
                            <Input type="password" />
                        </FormControl> */}

                        <Button onPress={submitForm} mt="2" colorScheme="indigo">
                            Sign up
                        </Button>
                    </VStack>
                </Box>
            </Center>
        </NativeBaseProvider>


    )
};
