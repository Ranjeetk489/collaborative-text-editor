import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, Pressable} from 'react-native';
import * as ImagePicker from "expo-image-picker";
import { useState } from 'react';

const placeHolderBg = require("./assets/bg.jpg")



function ImageViewer({ placeholderImageSource, selectedImage }) {
  const imageSource = selectedImage !== null
    ? { uri: selectedImage }
    : placeholderImageSource;

  return <Image source={imageSource} style={styles.image} />;
}

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('You did not select any image.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Image Picker</Text>
      {/* <Image source={placeHolderBg} style={styles.img}/> */}
      <ImageViewer
          placeholderImageSource={placeHolderBg}
          selectedImage={selectedImage}
        />
      <Pressable onPress={pickImageAsync} style={styles.button}><Text style={styles.buttonLabel}>Select Image</Text></Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: "400px",
    height: "400px",
    borderRadius: "18px",
  }, 

  button: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'black',
    padding:12,
    marginTop: 12,

  },

  buttonLabel: {
    color: "white",
    fontSize: "16px",
    fontWeight: "400",
  },
  header : {
    fontSize: "24px",
    fontWeight: "600",
    marginBottom: "12px",
    
  }
});
