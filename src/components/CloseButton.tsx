import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';

export const CloseButton = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.backButton}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon color="#363637" name="arrow-back" size={35} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    zIndex: 1,
    elevation: 9,
    top: 15,
    left: 15,
  },
});
