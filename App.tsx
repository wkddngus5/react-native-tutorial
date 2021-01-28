// In App.js in a new project

import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from './src/screens/auth';
import MainScreen from './src/screens/main';
import SplashScreen from 'react-native-splash-screen';
import { RootStackParamList } from './src/screens/RootStackParamList';
import ModalScreen from './src/screens/modal';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './src/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const RootStack = createStackNavigator<RootStackParamList>();

const CustomSplashScreen = () => (
  <View style={styles.splashScreen}>
    <Text adjustsFontSizeToFit={true} style={styles.splashText}>
      React Native Splash
    </Text>
  </View>
);

function App() {
  const [showSplash, setShowSplash] = useState<boolean>(true);

  useEffect(() => {
    SplashScreen.hide();
    setTimeout(() => {
      setShowSplash(false);
    }, 1500);
  }, []);

  return (
    <Provider store={createStore(rootReducer, composeWithDevTools())}>
      <SafeAreaView style={styles.container}>
        {showSplash ? (
          <CustomSplashScreen />
        ) : (
          <NavigationContainer>
            <RootStack.Navigator
              mode="modal"
              initialRouteName="auth"
              screenOptions={{ headerShown: false }}
            >
              <RootStack.Screen name="auth" component={AuthScreen} />
              <RootStack.Screen name="main" component={MainScreen} />
              <RootStack.Screen name="modal" component={ModalScreen} />
            </RootStack.Navigator>
          </NavigationContainer>
        )}
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  splashScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashText: {
    textAlign: 'center',
    fontSize: 50,
    fontWeight: 'bold',
  },
});

export default App;
