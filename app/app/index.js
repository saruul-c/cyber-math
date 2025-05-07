import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import EnkhtulgaChick from './images/Enkhtulga_chick.png';
import EnkhtulgaText from './images/Enkhtulga_cybermathtext.png';

export default function Enkhtulga() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Image source={EnkhtulgaChick} style={styles.chick} />
      <Image source={EnkhtulgaText} style={styles.mathText} />

      <Text style={styles.description}>
        Combining the best of AI and language science, lessons are tailored to help you learn at just the right level and pace.
      </Text>

      <TouchableOpacity
        style={styles.getStartedButton}
        onPress={() => router.push('/munkhod')}
      >
        <Text style={styles.getStartedText}>GET STARTED</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>I ALREADY HAVE AN ACCOUNT</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  chick: { width: 200, height: 200, marginBottom: 20 },
  mathText: { width: 150, resizeMode: 'contain' },
  description: { fontSize: 16, textAlign: 'center', margin: 16 },
  getStartedButton: { backgroundColor: '#C287F1', padding: 16, borderRadius: 12, marginTop: 10 },
  getStartedText: { color: '#fff', fontWeight: '600' },
  loginButton: { marginTop: 10, padding: 16 },
  loginText: { color: '#C287F1', fontWeight: '600' },
});
