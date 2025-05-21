import React, { useEffect, useRef } from 'react';
import { View, Image, StyleSheet, Dimensions, SafeAreaView, Animated } from 'react-native';
import { useRouter } from 'expo-router';
import topCurveImage from './images/Tugsbileg1.png';
import logoImage from './images/Tugsbileg2.png';
import bottomCurveImage from './images/Tugsbileg3.png';

const { width, height } = Dimensions.get('window');

const CyberMathSplashScreen = () => {
  const router = useRouter();

  // Animated values
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    // Run animation
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 5,
        useNativeDriver: true,
      }),
    ]).start();

    // Navigate after 3s
    const timer = setTimeout(() => {
      router.push('/munkhod'); // or '/phone'
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Image 
        source={topCurveImage}
        style={styles.topCurve}
        resizeMode="cover"
      />

      {/* Animated logo */}
      <View style={styles.logoContainer}>
        <Animated.Image 
          source={logoImage}
          style={[
            styles.logo,
            {
              opacity: fadeAnim,
              transform: [{ scale: scaleAnim }],
            },
          ]}
          resizeMode="contain"
        />
      </View>

      <Image 
        source={bottomCurveImage}
        style={styles.bottomCurve}
        resizeMode="cover"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topCurve: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width,
    height: height * 0.3, 
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: width * 0.7,
    height: height * 0.2,
  },
  bottomCurve: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: width,
    height: height * 0.3,
  }
});

export default CyberMathSplashScreen;
