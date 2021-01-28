import React from 'react';
import { View, Text, Button } from 'react-native';
import {
  CompositeNavigationProp,
  useNavigation,
} from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { MainBottomTabParamList } from '../MainBottomTabParamList';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../RootStackParamList';

type StatisticsScreenProps = CompositeNavigationProp<
  BottomTabNavigationProp<MainBottomTabParamList, 'statistics'>,
  StackNavigationProp<RootStackParamList, 'main'>
>;

export default function StatisticsScreen() {
  const navigation = useNavigation<StatisticsScreenProps>();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Statistics Screen</Text>
      <Button onPress={() => navigation.navigate('modal')} title="Open Modal" />
    </View>
  );
}
