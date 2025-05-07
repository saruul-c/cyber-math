import { useRouter } from 'expo-router';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function QuizScreen() {
  const router = useRouter();
  const [answer, setAnswer] = useState('');

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>△ABC гурвалжны C талын урт хэд вэ?</Text>
      <TextInput
        value={answer}
        onChangeText={setAnswer}
        style={{ borderWidth: 1, marginVertical: 20, padding: 10 }}
        placeholder="Хариулт бичнэ үү"
      />
      <TouchableOpacity onPress={() => router.push('/result')}>
        <Text style={{ backgroundColor: 'purple', color: 'white', padding: 10 }}>Илгээх</Text>
      </TouchableOpacity>
    </View>
  );
}
