import { useRouter } from 'expo-router';
import { View, Text, TouchableOpacity } from 'react-native';

export default function SelectScreen() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Сайн уу? Дасгалаа сонгоорой</Text>
      <TouchableOpacity onPress={() => router.push('/quiz')}>
        <Text style={{ fontSize: 20, padding: 10, backgroundColor: 'green', color: 'white' }}>Эхлэх</Text>
      </TouchableOpacity>
    </View>
  );
}
