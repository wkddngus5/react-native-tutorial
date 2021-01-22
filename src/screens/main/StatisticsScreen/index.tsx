import React from 'react';
import { View, Text, Button } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { MainBottomTabParamList } from '../MainBottomTabParamList';

type StatisticsScreenProps = BottomTabScreenProps<
  MainBottomTabParamList,
  'statistics'
>;
export default function StatisticsScreen({
  navigation,
}: StatisticsScreenProps) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Statistics Screen</Text>
      <Button
        title="Go to Todos"
        onPress={() => navigation.navigate('todos')}
      />
    </View>
  );
}
