import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert } from 'react-native';
import {signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../firebaseConfig'

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter both email and password.");
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert("Success", `Logged in as: ${email}`);
    } catch (error) {
      Alert.alert("Login Failed");
    }
  };

  return (
    <View style={{ padding: 20, marginTop: 100 }}>
      <Text>Email</Text>
      <TextInput value={email} onChangeText={setEmail} style={{ borderWidth: 1, marginBottom: 10 }} />
      <Text>Password</Text>
      <TextInput secureTextEntry value={password} onChangeText={setPassword} style={{ borderWidth: 1, marginBottom: 10 }} />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}