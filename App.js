import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import RegisterScreen from './app/screens/RegisterScreen';
import ConnectScreen from './app/screens/ConnectScreen';
import NotificationsScreen from './app/screens/NotificationsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="NotificationsScreen">
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="ConnectScreen" component={ConnectScreen} />
        <Stack.Screen name="NotificationsScreen" component={NotificationsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

