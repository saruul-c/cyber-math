import React, { useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';

export default function TermsScreen() {
  const router = useRouter();

  const handleAccept = async () => {
    try {
      await AsyncStorage.setItem('termsAccepted', 'true');
      router.push('/select');
    } catch (error) {
      console.error('Нөхцөл хадгалах үед алдаа:', error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require('./images/Tugsbileg2.png')} // Зураг замыг шалгана уу
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Title */}
      <Text style={styles.title}>CYBERMATH ҮЙЛЧИЛГЭЭНИЙ НӨХЦӨЛ</Text>

      {/* Body */}
      <ScrollView style={styles.body}>
        <Text style={styles.text}>
          “Cybermath” үйлчилгээг ашиглаж буй танд баярлалаа. Үйлчилгээнд тавтай морилно уу.
          Хэрэглэгч та “Cybermath” аппликейшнд өөрийн мэдээллийг бүртгүүлэн, баталгаажуулалт хийснээр
          хэрэглэгч болно. Та энэхүү үйлчилгээний нөхцөлийг уншиж, ойлгож, хүлээн зөвшөөрсөнд тооцно.
        </Text>

        {/* Real Conditions */}
        {[
          'НЭГ. ҮЙЛЧИЛГЭЭНИЙ ТАНИЛЦУУЛГА',
          'Cybermath нь сурагчдад зориулсан математикийн сорилын систем юм. Хэрэглэгч нь бодлого бодох, оноо цуглуулах, ойлголтоо бататгах боломжтой.',

          'ХОЁР. БҮРТГЭЛ БА БАТАЛГААЖУУЛАЛТ',
          'Апп-д бүртгүүлэхэд хэрэглэгчийн утасны дугаар шаардлагатай ба баталгаажуулалтын кодоор баталгаажуулна.',

          'ГУРАВ. ТӨЛБӨРТ ҮЙЛЧИЛГЭЭ',
          'Cybermath үйлчилгээ нь одоогоор бүрэн төлбөргүй. Цаашид нэмэлт функц, түвшин, багц үйлчилгээ нээгдэхэд төлбөрийн нөхцөл тусад нь танилцуулагдана.',

          'ДӨРӨВ. ОЙЛГОЛТ БАТАЛГААЖУУЛАХ БОДЛОГО',
          'Хэрэв хэрэглэгч бодлогыг буруу бодсон тохиолдолд систем автоматаар ижил төстэй ойлголтыг баталгаажуулах шинэ бодлогыг санал болгоно.',

          'ТАВ. ХЭРЭГЛЭГЧИЙН ХАРИУЦЛАГА',
          'Хэрэглэгч нь өөрийн оруулсан мэдээллийн үнэн зөв байдал, апп-ыг ёс зүйн дагуу ашиглах үүрэгтэй.',
        ].map((item, index) => (
          <Text key={index} style={styles.listItem}>
            {item}
          </Text>
        ))}
      </ScrollView>

      {/* Button */}
      <TouchableOpacity style={styles.button} onPress={handleAccept}>
        <Text style={styles.buttonText}>Зөвшөөрөх</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    marginTop: 40,
    marginBottom: 10,
  },
  logoContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  logo: {
    height: 60,
    width: 160,
  },
  title: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 10,
  },
  body: {
    marginTop: 10,
    marginBottom: 20,
  },
  text: {
    fontSize: 14,
    color: '#333',
    marginBottom: 20,
  },
  listItem: {
    fontSize: 14,
    paddingVertical: 6,
    borderBottomWidth: 0.5,
    borderColor: '#ccc',
  },
  button: {
    backgroundColor: '#D9A9F5',
    padding: 16,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
});
