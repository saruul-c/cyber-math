import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function Success() {
  const router = useRouter();
  return (
    <View style={{ padding: 20 }}>
      <Text>🎉 Амжилттай нэвтэрлээ!</Text>
      <Button title="Нөхцөл үзэх" onPress={() => router.push('/terms')} />
    </View>
  );
}
