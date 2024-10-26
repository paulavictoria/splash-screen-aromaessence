import React from 'react';
import { View, Image, StyleSheet,ImageBackground } from 'react-native';
import Icon from './assets/logo.png';
import BackgroundImage from './assets/intro.png'; 

export default function SplashScreen() {
  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <Image source={Icon} style={styles.image} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 140,
    height: 138,
    resizeMode: 'cover', 
  },
});

