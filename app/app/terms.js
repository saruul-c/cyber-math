import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function Terms() {
    const router = useRouter();
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Үйлчилгээний нөхцөл</Text>
      <Text>1. Та зөв мэдээлэл оруулсан байна.
2. Кодоор баталгаажуулалт хийнэ.
3. Амжилттай бол систем рүү орно.</Text>
        <Button title="Нөхцөл үзэх" onPress={() => router.push('/select')} />
    </View>
  );
}
