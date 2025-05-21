import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.hexagon}>
        <Image
          source={require('./images/ChuluunErdene.png')} // Replace with your image path
          style={styles.checkmark}
        />
      </View>
      <Text style={styles.title}>Your account was successfully created!</Text>
      <Text style={styles.subtitle}>Only one click to explore online education.</Text>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity>
      <Image
        source={require('./images/ChuluunErdene2.png')} // Replace with your image path
        style={styles.chickImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6FA', // Purple background
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  hexagon: {
    width: 80,
    height: 80,
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkmark: {
    width: 115,
    height: 120,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 45,
  },
  subtitle: {
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 10,
  },
  loginButton: {
    backgroundColor: '#CE82FF', // Purple button
    paddingVertical: 14,
    paddingHorizontal: 110,
    borderRadius: 10,
    marginBottom: 30,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
  },
  chickImage: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    marginLeft: 40,
  },
});