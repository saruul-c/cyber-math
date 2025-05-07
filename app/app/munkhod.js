import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import EnkhtulgaText from './images/Munkh_Od.png';

const MunkhOd = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image source={EnkhtulgaText} style={styles.image} />
      <Text style={styles.title}>Free, Fun & Effective</Text>
      <Text style={styles.subtitle}>
        Learning with Duolingo is fun, and research shows that it works.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('./phone')}
      >
        <Text style={styles.buttonArrow}>→</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('./phone')}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MunkhOd;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: 295,
    height: 295,
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
    marginBottom: 60,
    paddingHorizontal: 10,
  },
  button: {
    width: 56,
    height: 56,
    backgroundColor: '#CE82FF',
    padding: 20,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  buttonArrow: {
    fontSize: 24,
    color: 'white',
  },
  skipText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#727374',
  },
});
