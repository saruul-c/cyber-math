import React, { useState } from 'react'; 
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import backgroundimage from './images/phoneBackground.png'; // Your blurred background

export default function Phone() {
  const [phone, setPhone] = useState('');
  const router = useRouter();

  const handleContinue = async () => {
    try {
      await AsyncStorage.setItem('userPhone', phone);
      router.push('/verify'); // Navigate to verify screen
    } catch (error) {
      console.error('Утас хадгалах үед алдаа:', error);
    }
  };

  return (
    <ImageBackground
      source={backgroundimage}
      style={styles.background}
      imageStyle={{ opacity: 0.2 }}
    >
      <SafeAreaView style={styles.container}>
        {/* Back button */}
        <TouchableOpacity style={styles.backBox}>
          <Text style={styles.backText}>{'<'}</Text>
        </TouchableOpacity>

        {/* Image */}
        <Image source={require('./images/ChuluunErdene2.png')} style={styles.image} />

        {/* Texts */}
        <Text style={styles.title}>Сайн уу?</Text>
        <Text style={styles.subtitle}>Утасны дугаараа хийн бүртгүүлээрэй</Text>

        {/* Input field */}
        <View style={styles.inputContainer}>
          <View style={styles.codeBox}>
            <Text style={styles.countryCode}>+976</Text>
          </View>
          <TextInput
            style={styles.phoneInput}
            placeholder="Утасны дугаар"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />
        </View>

        {/* Arrow Button */}
        <TouchableOpacity
          style={[styles.arrowButton, { alignSelf: 'flex-end' }]}
          onPress={handleContinue}
        >
          <Text style={styles.arrowText}>→</Text>
        </TouchableOpacity>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.helpText}>Ямар нэг асуудал тулгарсан уу?</Text>
          <TouchableOpacity>
            <Text style={styles.helpLink}>Тусламж</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  backBox: {
    width: 30,
    height: 30,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginLeft: 5,
  },
  backText: {
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
    lineHeight: 22,
    marginTop: 1,
  },
  image: {
    width: 170,
    height: 158,
    marginTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    marginTop: 30,
    alignItems: 'center',
  },
  codeBox: {
    backgroundColor: '#E5E7EB',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginRight: 10,
  },
  countryCode: {
    fontSize: 16,
  },
  phoneInput: {
    flex: 1,
    backgroundColor: '#E5E7EB',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 16,
    color: '#666',
  },
  arrowButton: {
    backgroundColor: '#DCB2FF',
    width: 30,
    height: 30,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginRight: 30,
  },
  arrowText: {
    fontSize: 24,
    color: 'white',
    lineHeight: 24,
    textAlign: 'center',
    marginTop: -1,
  },
  helpText: {
    color: '#888',
    fontSize: 14,
    marginTop: 100,
  },
  helpLink: {
    color: 'purple',
    fontSize: 14,
    marginTop: 4,
    textAlign: 'center',
  },
});
