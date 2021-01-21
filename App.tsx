// In App.js in a new project

import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StatisticsScreen from './Screens/StatisticsScreen';
import TodosScreen from './Screens/TodosScreen';
import SplashScreen from 'react-native-splash-screen';
import { RootStackParamList } from './Screens/RootStackParamList';

const RootStack = createBottomTabNavigator<RootStackParamList>();

function App() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Todos">
        <RootStack.Screen name="Todos" component={TodosScreen} />
        <RootStack.Screen name="Statistics" component={StatisticsScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
