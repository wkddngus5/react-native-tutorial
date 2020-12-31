/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {Picker} from '@react-native-community/picker';

const App: () => React$Node = () => {
  return (
    <>
      <View style={styles.mainView}>
        <View style={styles.subView}>
          <Text style={styles.mainText}>hello world</Text>
        </View>
        <View style={styles.subView}>
          <Text>hello world</Text>
        </View>
        <View style={styles.anotherSubView}>
          <Text style={styles.mainText}>hello world</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'green',
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subView: {
    flex: 1,
    backgroundColor: 'yellow',
    marginBottom: 10,
  },
  anotherSubView: {
    flex: 2,
    backgroundColor: 'yellow',
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
    padding: 20,
  }
});

export default App;
