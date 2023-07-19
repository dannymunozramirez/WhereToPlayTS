import React from 'react';
import { View, Button, Dimensions } from 'react-native'; // Import ViewPropTypes from 'deprecated-react-native-prop-types' package
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { SportsPoster } from './SportsPoster';

export const ModalSearchCard = ({ navigation, route }: any) => {

    const { width: windowWidth } = Dimensions.get('window')
    const uriSoccer =
        [
            'https://images.unsplash.com/photo-1551958219-acbc608c6377?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80',
            'https://images.unsplash.com/photo-1551958219-acbc608c6377?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80',
            'https://images.unsplash.com/photo-1551958219-acbc608c6377?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80',
            'https://images.unsplash.com/photo-1551958219-acbc608c6377?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80'
        ]

    const { top } = useSafeAreaInsets();
    return (
        <View style={{ marginTop: top + 20 }} >
            <View style={{ height: 440 }}>
                <Carousel
                    data={uriSoccer}
                    renderItem={({ item }: any) => <SportsPoster uriPicture={item} />}
                    sliderWidth={windowWidth}
                    itemWidth={300}
                />
            </View>
            <Button onPress={() => navigation.goBack()} title="Dismiss" />
        </View>
    );
}
