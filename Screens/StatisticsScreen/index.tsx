import React from 'react';
import { View, Text, Button } from 'react-native';

export default function StatisticsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Statistics Screen</Text>
      <Button
        title="Go to Todos"
        onPress={() => navigation.navigate('Todos')}
      />
    </View>
  );
}
