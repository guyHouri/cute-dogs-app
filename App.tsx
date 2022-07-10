import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Provider } from 'react-redux';
import styled from "styled-components/native";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from './src/config/consts';
import { AppNavigation } from './src/navigation/AppNavigation';
import { DogPost as DogPostScreen } from './src/screens/dogPost/DogPost';
import { Landing } from './src/screens/landing/Landing';
// import Landing from './src/screens/landing/Landing';
import { Container, Logo } from './src/screens/landing/style';
import { Posts } from './src/screens/posts/Posts';
import { store } from './src/store/store';
import { DogPost } from './src/types/types';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation></AppNavigation>
    </Provider>
  );
}