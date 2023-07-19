import React, { useState } from 'react';
import { View, Button, Image } from 'react-native';
import ImagePicker, { Image as PickedImage } from 'react-native-image-crop-picker';

const MultiImagePicker = () => {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  const sampleImagePaths = [
    'https://static.vecteezy.com/system/resources/thumbnails/003/396/140/small/soccer-ball-in-net-with-spotlight-or-stadium-light-background-free-photo.jpg',
    'https://img.freepik.com/premium-photo/basketball_41185-2.jpg',
    'https://news.microsoft.com/wp-content/uploads/prod/sites/93/2018/05/FIVB-vball.png',
  ];

  const pickMultipleImages = () => {
    ImagePicker.openPicker({
      multiple: true,
      mediaType: 'photo',
    })
      .then((images: PickedImage[]) => {
        setSelectedImages(sampleImagePaths.map(image => image));
      })
      .catch(error => {
        console.log('Error selecting images:', error);
      });
  };

  return (
    <View>
      <Button title="Select Multiple Images" onPress={pickMultipleImages} />
      {selectedImages.map((imageUri, index) => (
        <Image key={index} source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
      ))}
    </View>
  );
};

export default MultiImagePicker;
