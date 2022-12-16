import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DetailScreen } from '../screens/DetailScreen';
import { ActorScreen } from '../screens/ActorScreen';
import { QRScanScreen } from '../screens/QRScanScreen';
import SearchScreen from '../screens/SearchScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from '../screens/HomeScreen'

export type RootStackParams = {
  HomeScreen: undefined;
  DetailScreen: undefined;
  ActorDetailScreen: { actorId: number };
  QRScanScreen: undefined;
  SearchScreen: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const NavigationMovie = () => {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        headerShown: (route.name === 'DetailScreen' || 'HomeScreen')  ? true : false,
      })}
    >
      <Stack.Screen name="HomeScreen"
      component={HomeScreen} 
      options={({ navigation }) => ({
        headerTitle: 'Películas',
        headerTintColor:'white',
        headerStyle: {
          backgroundColor: 'black'
        },
        headerRight: () => (
          <>
          <Icon
              onPress={() => navigation.navigate('QRScanScreen')}
              name="qr-code-scanner"
              color="white"
              size={30}
              style={{ marginRight: 10}}
            />
          <Icon
            onPress={() => navigation.navigate('SearchScreen', {type:'movie'})}
            name="search"
            color="white"
            size={30}
            style={{ marginRight: 60, marginTop:-30}}
          />
          </>
        ),
      })}/>
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={({ navigation }) => ({
          headerTitle: 'Películas',
          headerTintColor:'white',
          headerStyle: {
            backgroundColor: 'black'
          },
          headerRight: () => (
            <Icon
              onPress={() => navigation.navigate('QRScanScreen')}
              name="qr-code-scanner"
              color="black"
              size={30}
              style={{ marginRight: 10 }}
            />
          ),
        })}
      />
      <Stack.Screen options={{headerShown:false}} name="ActorDetailScreen" component={ActorScreen} />
      <Stack.Screen name="QRScanScreen" component={QRScanScreen} />
      <Stack.Screen options={{headerTitle:"Buscador"}} name="SearchScreen" component={SearchScreen} />
    </Stack.Navigator>
  );
};
