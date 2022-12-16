import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const MyTabBar = ({ state, descriptors, navigation }:any) => {
        return (
            <View style={{ flexDirection: 'row' , justifyContent:'center',alignItems:'center', backgroundColor:'black'}}>
              {state.routes.map((route:any, index:any) => {
                const { options } = descriptors[route.key];
                const label =
                  options.tabBarLabel !== undefined
                    ? options.tabBarLabel
                    : options.title !== undefined
                    ? options.title
                    : route.name;
        
                const isFocused = state.index === index;
        
                const onPress = () => {
                  const event = navigation.emit({
                    type: 'tabPress',
                    target: route.key,
                    canPreventDefault: true,
                  });
        
                  if (!isFocused && !event.defaultPrevented) {
                    // The `merge: true` option makes sure that the params inside the tab screen are preserved
                    navigation.navigate({ name: route.name, merge: true });
                  }
                };
        
                const onLongPress = () => {
                  navigation.emit({
                    type: 'tabLongPress',
                    target: route.key,
                  });
                };
                return (
                  <TouchableOpacity
                    accessibilityRole="button"
                    accessibilityState={isFocused ? { selected: true } : {}}
                    accessibilityLabel={options.tabBarAccessibilityLabel}
                    testID={options.tabBarTestID}
                    onPress={onPress}
                    onLongPress={onLongPress}
                    style={{ flex: 1 ,  justifyContent:'center' ,alignItems:'center'}}
                  >
                    <Icon name={route.name === 'Movie' ? 'movie' : 'live-tv'} size={25} color={isFocused ? 'white' : 'grey'} />
                    <Text style={{ color: isFocused ? 'white' : 'grey' , fontSize:15 }}>
                      {label}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
    )
} 

export default MyTabBar