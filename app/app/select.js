import React, { useEffect, useState } from 'react'; 
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  Platform,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');
const levels = Array.from({ length: 10 }, (_, i) => i + 1);

export default function SelectScreen() {
  const [phone, setPhone] = useState('Гантулга');
  const [selectedLevel, setSelectedLevel] = useState(1);
  const router = useRouter();

  useEffect(() => {
    const loadPhone = async () => {
      const storedPhone = await AsyncStorage.getItem('userPhone');
      if (storedPhone) setPhone(storedPhone);
    };
    loadPhone();
  }, []);

  const handleStart = () => {
    // Та selectedLevel хадгалах логик нэмэх боломжтой
    router.push('/quiz');
  };

  return (
    <View style={styles.container}>
      {/* Header/Profile */}
      <View style={styles.header}>
        <View style={styles.profile}>
          <Image source={require('./images/profile.png')} style={styles.profileImg} />
          <View>
            <Text style={styles.name}>{phone}</Text>
            <Text style={styles.greeting}>Сайн уу?</Text>
          </View>
        </View>
        <Image source={require('./images/easy10.png')} style={styles.levelInfo} />
      </View>

      {/* Logo */}
      <Image source={require('./images/CyberMathHome.png')} style={styles.logo} />

      {/* Grid of levels */}
      <View style={styles.levelGrid}>
        {levels.map((level) => (
          <TouchableOpacity
            key={level}
            onPress={() => setSelectedLevel(level)}
            style={[
              styles.levelBtn,
              selectedLevel === level && styles.levelBtnActive,
            ]}
          >
            <Text style={[
              styles.levelText,
              selectedLevel === level && styles.levelTextActive,
            ]}>
              {level}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Start Button */}
      <TouchableOpacity style={styles.startBtn} onPress={handleStart}>
        <Text style={styles.startText}>Эхлэх</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImg: {
    width: 50,
    height: 50,
    borderRadius: 999,
    marginRight: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  greeting: {
    margin: 0,
    fontSize: 13,
    color: '#555',
  },
  levelInfo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  logo: {
    width: 300,
    height: 80,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginVertical: 20,
  },
  levelGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 30,
  },
  levelBtn: {
    width: 80,
    height: 80,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 12,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 2, height: 4 },
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  levelBtnActive: {
    backgroundColor: '#4caf50',
  },
  levelText: {
    fontSize: 24,
    color: '#000',
  },
  levelTextActive: {
    color: 'white',
    fontWeight: 'bold',
  },
  startBtn: {
    backgroundColor: '#00c853',
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: 'center',
    width: 270,
    alignSelf: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowOffset: { width: 2, height: 4 },
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  startText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
