import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeTvScreen from '../screens/HomeTvScreen';
import { DetailTv } from '../screens/DetailTv';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ActorScreen } from '../screens/ActorScreen';
import SearchScreen from '../screens/SearchScreen';
import { QRScanScreen } from '../screens/QRScanScreen';

const Stack = createStackNavigator();


const NavigationTv = () => {
    return(
        <Stack.Navigator>
        <Stack.Screen 
        name="TV"
        component={HomeTvScreen}
        options={({ navigation }) => ({
          headerTitle: 'Series',
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
              onPress={() => navigation.navigate('SearchScreen', {type:'tv'})}
              name="search"
              color="white"
              size={30}
              style={{ marginRight: 60, marginTop:-30}}
            />
            </>
          ),
        })}/>
        <Stack.Screen
        name="DetailTv"
        component={DetailTv}
        options={({ navigation }) => ({
          headerTitle: 'Tv Shows',
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
        
    )
}

export default NavigationTv