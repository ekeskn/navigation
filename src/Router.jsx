import 'react-native-gesture-handler';
import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import First from './pages/First';
import Second from './pages/Second';
import Third from './pages/Third';
import FirstDetail from './pages/FirstDetailPage';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const FirstPages = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Firstmain" component={First} />
      <Stack.Screen name="Detail" component={FirstDetail} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="First" component={FirstPages} />
        <Tab.Screen name="Second" component={Second} />
        <Tab.Screen name="Third" component={Third} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
