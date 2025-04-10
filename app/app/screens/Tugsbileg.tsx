import React from 'react';
import { View, Image, StyleSheet, Dimensions, SafeAreaView } from 'react-native';

const { width, height } = Dimensions.get('window');

const CyberMathSplashScreen = () => {
  const topCurveImage = require('./assets/top_curve.png');
  const logoImage = require('./assets/cybermath_logo.png');
  const bottomCurveImage = require('./assets/bottom_curve.png');

  return (
    <SafeAreaView style={styles.container}>
      {}
      <Image 
        source={topCurveImage}
        style={styles.topCurve}
        resizeMode="cover"
      />

      {}
      <View style={styles.logoContainer}>
        <Image 
          source={logoImage}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {}
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
