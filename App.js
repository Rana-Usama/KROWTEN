import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import RegisterScreen from './app/screens/RegisterScreen';
import ConnectScreen from './app/screens/ConnectScreen';
import NotificationsScreen from './app/screens/NotificationsScreen';
import SpacesScreen from './app/screens/SpacesScreen';
import HomeScreen from './app/screens/HomeScreen';
import SearchRecommendationScreen from './app/screens/SearchRecommendationScreen';
import AddMemberScreen from './app/screens/AddMemberScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="AddMemberScreen">
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="ConnectScreen" component={ConnectScreen} />
        <Stack.Screen name="NotificationsScreen" component={NotificationsScreen} />
        <Stack.Screen name="SpacesScreen" component={SpacesScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SearchRecommendationScreen" component={SearchRecommendationScreen} />
        <Stack.Screen name="AddMemberScreen" component={AddMemberScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

