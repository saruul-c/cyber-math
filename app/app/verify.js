import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width } = Dimensions.get('window');

export default function Verify() {
  const [code, setCode] = useState(['', '', '', '', '']);
  const [phone, setPhone] = useState('');
  const [timer, setTimer] = useState(20);
  const inputs = useRef([]);
  const router = useRouter();

  // Load phone number from AsyncStorage
  useEffect(() => {
    const loadPhone = async () => {
      const savedPhone = await AsyncStorage.getItem('userPhone');
      if (savedPhone) {
        setPhone(savedPhone);
      }
    };
    loadPhone();
  }, []);

  // Timer
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer(prev => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleChange = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);
    if (text && index < 4) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && code[index] === '' && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handleVerify = async () => {
    const joined = code.join('');
    if (joined === '12345') {
      try {
        await AsyncStorage.setItem('userVerified', 'true');
        router.push('/success');
      } catch (err) {
        console.error('AsyncStorage error:', err);
      }
    } else {
      alert('Код буруу байна');
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.card}>
        <Text style={styles.title}>Таны дугаарыг баталгаажуулна уу</Text>
        <Text style={styles.subtitle}>
          +976 {phone || 'XXXXXXX'} дугаарт илгээсэн кодыг оруулна уу
        </Text>

        <View style={styles.otpContainer}>
          {code.map((val, i) => (
            <TextInput
              key={i}
              ref={ref => (inputs.current[i] = ref)}
              style={styles.otpInput}
              keyboardType="number-pad"
              maxLength={1}
              value={val}
              onChangeText={text => handleChange(text, i)}
              onKeyPress={e => handleKeyPress(e, i)}
            />
          ))}
        </View>

        <Text style={styles.timer}>
          Дахин код авах 00:{timer < 10 ? `0${timer}` : timer}
        </Text>

        <TouchableOpacity style={styles.button} onPress={handleVerify}>
          <Text style={styles.buttonText}>НЭВТРЭХ</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  card: {
    backgroundColor: '#fff',
    width: width * 0.9,
    padding: 30,
    borderRadius: 20,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    color: '#666',
    fontSize: 14,
    marginBottom: 20,
    textAlign: 'center',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 20,
  },
  otpInput: {
    width: 50,
    height: 60,
    fontSize: 24,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#D0A8F5',
    borderRadius: 10,
    backgroundColor: '#F7F3FB',
  },
  timer: {
    color: '#888',
    fontSize: 14,
    marginBottom: 30,
  },
  button: {
    width: '100%',
    backgroundColor: '#D0A8F5',
    paddingVertical: 14,
    borderRadius: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
