import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TodoScreen from './TodosScreen';
import StatisticsScreen from './StatisticsScreen';

const MainBottomTab = createBottomTabNavigator();

export default function MainScreen() {
  return (
    <MainBottomTab.Navigator>
      <MainBottomTab.Screen name="todos" component={TodoScreen} />
      <MainBottomTab.Screen name="statistics" component={StatisticsScreen} />
    </MainBottomTab.Navigator>
  );
}


// Provider는 NavigationContainer 상위에!
{/* <Provider store={createStore(rootReducer, composeWithDevTools)}>
  <MainBottomTab.Navigator>
    <MainBottomTab.Screen name="todos" component={TodoScreen} />
    <MainBottomTab.Screen name="statistics" component={StatisticsScreen} />
  </MainBottomTab.Navigator>
</Provider> */}