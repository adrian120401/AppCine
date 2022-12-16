import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MyTabBar from './MyTabBar'
import {NavigationMovie} from './Navigation'
import NavigationTv from './NavigationTv';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return(
        <NavigationContainer>
        <Tab.Navigator screenOptions={{headerShown: false}} tabBar={props => <MyTabBar {...props} />}>
          <Tab.Screen name="Movie" component={NavigationMovie}></Tab.Screen>
          <Tab.Screen name="TV" component={NavigationTv}></Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    )

}

export default TabNavigation