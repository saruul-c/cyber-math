import { View, Text, TextInput, Button } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';

export default function Verify() {
  const [code, setCode] = useState('');
  const router = useRouter();

  return (
    <View style={{ padding: 20 }}>
      <Text>Код оруулна уу:</Text>
      <TextInput value={code} onChangeText={setCode} keyboardType="numeric" style={{ borderBottomWidth: 1 }} />
      <Button title="Баталгаажуулах" onPress={() => router.push('/success')} />
    </View>
  );
}
