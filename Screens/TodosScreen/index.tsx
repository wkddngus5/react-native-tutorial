import React from 'react';
import { View, Text, Button } from 'react-native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RootStackParamList } from '../RootStackParamList';

type TodosScreenNavigationProp = BottomTabNavigationProp<
  RootStackParamList,
  'Todos'
>;

export default function TodosScreen({
  navigation,
}: {
  navigation: TodosScreenNavigationProp;
}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Todos Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Statistics')}
      />
      <Button title="Go to back" onPress={() => navigation.goBack()} />
    </View>
  );
}
