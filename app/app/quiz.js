import { useRouter } from 'expo-router';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function QuizScreen() {
  const router = useRouter();
  const [answer, setAnswer] = useState('');
  const correctAnswer = '6 см';

  const handleSubmit = async () => {
    const userAnswer = {
      userId: 1,
      questionId: 1,
      answer: answer,
      correct: answer.trim() === correctAnswer,
    };

    try {
      await fetch('http://localhost:3001/answers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userAnswer),
      });

      router.push('/result');
    } catch (error) {
      console.error('Алдаа:', error);
    }
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>△ABC гурвалжны C талын урт хэд вэ?</Text>
      <TextInput
        value={answer}
        onChangeText={setAnswer}
        style={{ borderWidth: 1, marginVertical: 20, padding: 10 }}
        placeholder="Хариулт бичнэ үү"
      />
      <TouchableOpacity onPress={handleSubmit}>
        <Text style={{ backgroundColor: 'purple', color: 'white', padding: 10 }}>Илгээх</Text>
      </TouchableOpacity>
    </View>
  );
}
