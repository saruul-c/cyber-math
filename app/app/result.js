import { useRouter } from 'expo-router';
import { View, Text, TouchableOpacity } from 'react-native';

export default function ResultScreen() {
  const router = useRouter();
  const isCorrect = true; // эсвэл random сонголт

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>{isCorrect ? '✅ Амжилттай' : '❌ Амжилтгүй'}</Text>
      <Text style={{ marginVertical: 10 }}>
        {isCorrect ? 'Таны хариулт зөв байлаа' : 'Харамсалтай, буруу хариулсан байна'}
      </Text>

      <TouchableOpacity onPress={() => router.push('/select')}>
        <Text style={{ backgroundColor: '#ffcc00', padding: 10 }}>Дахин бодох</Text>
      </TouchableOpacity>
    </View>
  );
}

