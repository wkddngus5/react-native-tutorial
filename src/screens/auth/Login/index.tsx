import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import {
  CompositeNavigationProp,
  useNavigation,
} from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList } from '../AuthStackParamList';
import { RootStackParamList } from '../../RootStackParamList';

type LoginScreenProp = CompositeNavigationProp<
  StackNavigationProp<AuthStackParamList, 'login'>,
  StackNavigationProp<RootStackParamList>
>;

export default function LoginScreen() {
  const navigation = useNavigation<LoginScreenProp>();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login</Text>
      <TextInput value={email} placeholder="email" onChangeText={setEmail} />
      <TextInput
        value={password}
        placeholder="password"
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={() => navigation.navigate('main')} />
      <Button title="Signup" onPress={() => navigation.push('signup')} />
    </View>
  );
}
