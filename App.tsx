// In App.js in a new project

import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from './src/screens/auth';
import MainScreen from './src/screens/main';
import SplashScreen from 'react-native-splash-screen';
import { RootStackParamList } from './src/screens/RootStackParamList';

const RootStack = createStackNavigator<RootStackParamList>();

function App() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="auth">
        <RootStack.Screen name="auth" component={AuthScreen} />
        <RootStack.Screen name="main" component={MainScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
