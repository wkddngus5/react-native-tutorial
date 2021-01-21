1. React Navigation

```
  ...
  import { NavigationContainer } from 'react-native';
  import { createStackNavigator } from '@react-navigation/stack';

  const Stack = createStackNavigator();

  function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen}>
        <Stack.Navigator>
      </NavigationContainer>
    )
  }
```

2. navigation.navigate VS navigation.push

- "push" allows us to express the intent to add another route regardless of the existing navigation history.
