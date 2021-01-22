import React from 'react';
import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import { RootStackParamList } from '../RootStackParamList';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './Login';
import SignupScreen from './Signup';
import { Text, View } from 'react-native';

type AuthScreenNavigationProp = StackNavigationProp<RootStackParamList, 'auth'>;

const AuthStack = createStackNavigator();

export default function TodosScreen({
  navigation,
}: {
  navigation: AuthScreenNavigationProp;
}) {
  return (
    // <View>
    //   <Text>IM AUTH</Text>
    // </View>
    <AuthStack.Navigator>
      <AuthStack.Screen name="login" component={LoginScreen} />
      <AuthStack.Screen name="signup" component={SignupScreen} />
    </AuthStack.Navigator>
  );
}
