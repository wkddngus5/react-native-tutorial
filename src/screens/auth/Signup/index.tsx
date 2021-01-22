import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthStackParamList } from '../AuthStackParamList';

type SignupScreenProp = StackScreenProps<AuthStackParamList, 'signup'>;

export default function SignupScreen({ navigation }: SignupScreenProp) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Signup</Text>
      <TextInput value={email} placeholder="email" onChangeText={setEmail} />
      <TextInput
        value={password}
        placeholder="password"
        onChangeText={setPassword}
      />
      <Button title="Signup" onPress={() => navigation.navigate('login')} />
    </View>
  );
}
