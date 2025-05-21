import { useRouter } from 'expo-router';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';

export default function ResultScreen() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/answers?userId=1&_sort=id&_order=desc&_limit=1')
      .then((res) => res.json())
      .then((data) => {
        setResult(data[0]);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
        <Text>Түр хүлээнэ үү...</Text>
      </View>
    );
  }

  if (!result) {
    return (
      <View style={styles.center}>
        <Text>Хариу олдсонгүй</Text>
      </View>
    );
  }

  return (
    <View style={styles.center}>
      <Text style={[styles.title, { color: result.correct ? 'green' : 'red' }]}>
        {result.correct ? '✅ Амжилттай!' : '❌ Амжилтгүй'}
      </Text>
      <Text style={styles.message}>
        Та {result.correct ? 'зөв' : 'буруу'} хариулсан байна.
      </Text>
      <TouchableOpacity onPress={() => router.push('/select')}>
        <Text style={styles.retry}>→ Дахин бодох</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 10 },
  message: { fontSize: 18, marginBottom: 20 },
  retry: { fontSize: 16, color: '#C287F1', fontWeight: 'bold' },
});
