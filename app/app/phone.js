import { View, Text, TextInput, Button } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';

export default function Phone() {
  const [phone, setPhone] = useState('');
  const router = useRouter();

  return (
    <View style={{ padding: 20 }}>
      <Text>Утасны дугаар оруулна уу:</Text>
      <TextInput value={phone} onChangeText={setPhone} keyboardType="phone-pad" style={{ borderBottomWidth: 1 }} />
      <Button title="Үргэлжлүүлэх" onPress={() => router.push('/verify')} />
    </View>
  );
}
