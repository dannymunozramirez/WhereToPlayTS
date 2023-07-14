import React from 'react'

import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer'
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { BottomTabs, BottomTabsTournament } from './BottomTabs';

const Drawer = createDrawerNavigator();

export const SideMenu = () => {
    return (
        <Drawer.Navigator drawerContent={(props) => <InMenu {...props} />}
            screenOptions={{
                drawerPosition: 'left'
            }} >
            <Drawer.Screen name='BottomTabs' component={BottomTabs} />
            <Drawer.Screen name='BottomTabsTournament' component={BottomTabsTournament} />
        </Drawer.Navigator>
    )
}


const InMenu = ({ navigation }: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView>

            {/* CAvatar content */}
            <View style={styles.avatarContainer}>
                <Image
                    source={{ uri: 'https://static.vecteezy.com/system/resources/previews/002/640/730/original/default-avatar-placeholder-profile-icon-male-vector.jpg' }}
                    style={styles.avatar} />
            </View>

            {/* Menu options */}
            <View style={styles.menuContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('BottomTabs')} style={styles.menuButton}>
                    <Text style={styles.menuText}>Player Zone</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('BottomTabsTournament')} style={styles.menuButton}>
                    <Text style={styles.menuText}>Team Zone</Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>

    )
}
const styles = StyleSheet.create({
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 100,
    },
    avatarContainer: {
        marginTop: 10,
        alignItems: 'center'
    },
    menuContainer: {
        marginVertical: 30,
        marginHorizontal: 40,

    },
    menuButton: {
        marginVertical: 10
    },
    menuText: {
        fontSize: 15,
    },

})