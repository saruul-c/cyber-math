import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('./assets/chick.png')} // Replace with the actual image file
        style={styles.chick}
      />
      <Image
        source={require('./assets/cybermathtext.png')} // Replace with the actual image file
        style={styles.mathText}
      />
      <Text style={styles.description}>
        Combining the best of AI and language science, lessons are tailored to help you learn at just the right level and pace.
      </Text>
      <TouchableOpacity style={styles.getStartedButton}>
        <Text style={styles.getStartedText}>GET STARTED</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>I ALREADY HAVE AN ACCOUNT</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  chick: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 24,
  },
  mathText: {
    width: 150,
    resizeMode: 'contain',
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 32,
  },
  getStartedButton: {
    backgroundColor: '#C287F1',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    width: '80%',
    alignItems: 'center',
    marginBottom: 16,
  },
  getStartedText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  loginButton: {
    borderColor: '#C287F1',
    borderWidth: 2,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 32,
    width: '80%',
    alignItems: 'center',
  },
  loginText: {
    color: '#C287F1',
    fontWeight: '600',
    fontSize: 14,
  },
});
