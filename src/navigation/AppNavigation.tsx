import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { DogPost } from '../screens/dogPost/DogPost';
import { Landing } from '../screens/landing/Landing';
import { Posts } from '../screens/posts/Posts';
import { MainRoutes, MainStackParamList } from './Config';

const RootStack = createStackNavigator<MainStackParamList>();

export const AppNavigation: React.FC = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator initialRouteName={MainRoutes.Landing} screenOptions={{headerShown: false}}>
                <RootStack.Screen name={MainRoutes.Landing} component={Landing}></RootStack.Screen>
                <RootStack.Screen name={MainRoutes.DogPost} component={DogPost}></RootStack.Screen>
                <RootStack.Screen name={MainRoutes.Posts} component={Posts}></RootStack.Screen>
            </RootStack.Navigator>
        </NavigationContainer>
    )
}