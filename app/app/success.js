import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import checkIcon from './images/checkIcon.png'; // ✅ your check icon path

export default function Success() {
  const router = useRouter();
  const [phone, setPhone] = useState('');

  useEffect(() => {
    const loadPhone = async () => {
      const savedPhone = await AsyncStorage.getItem('userPhone');
      setPhone(savedPhone || 'Тодорхойгүй');
    };
    loadPhone();
  }, []);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.card}>
        <Image source={checkIcon} style={styles.image} />
        <Text style={styles.title}>Амжилттай</Text>
        <Text style={styles.subtitle}>Амжилттай нэвтэрлээ</Text>
        <Text style={styles.phone}>📱: {phone}</Text>

        <TouchableOpacity style={styles.button} onPress={() => router.push('/terms')}>
          <Text style={styles.buttonText}>Эхлэх</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F9FAFB',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    width: 295,
    height: 340,
    alignSelf: 'center',
  },
  image: {
    width: 120,
    height: 120,
    marginTop: 10,
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1F2937',
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    marginTop: 8,
    textAlign: 'center',
  },
  phone: {
    fontSize: 14,
    color: '#9CA3AF',
    marginTop: 12,
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#D0A8F5',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    width: '100%',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});
