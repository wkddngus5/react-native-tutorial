import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TodoScreen from './TodosScreen';
import StatisticsScreen from './StatisticsScreen';
import rootReducer from '../../reducer';

const MainBottomTab = createBottomTabNavigator();

export default function MainScreen() {
  return (
    <Provider store={createStore(rootReducer)}>
      <MainBottomTab.Navigator>
        <MainBottomTab.Screen name="todos" component={TodoScreen} />
        <MainBottomTab.Screen name="statistics" component={StatisticsScreen} />
      </MainBottomTab.Navigator>
    </Provider>
  );
}
