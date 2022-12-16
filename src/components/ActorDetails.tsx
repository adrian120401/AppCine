import React from 'react';
import { StyleSheet, Text, View, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Cast } from '../interfaces/creditsInterface';

interface Props {
  actor: Cast;
}

export const ActorDetails = ({ actor }: Props) => {
  const handleClick = () => {
    Linking.canOpenURL(actor?.homepage).then((supported) => {
      if (supported) {
        Linking.openURL(actor?.homepage);
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapperDetails}>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
            {actor?.name}
          </Text>
          <Text style={{ fontSize: 16, opacity: 0.7 }}>{actor?.birthday}</Text>
          <Text style={{ fontSize: 16, opacity: 0.7 }}>
            {actor?.place_of_birth}
          </Text>
        </View>
        {!!actor?.homepage && (
          <Icon
            name="link"
            size={30}
            onPress={handleClick}
            style={{ marginHorizontal: 10 }}
          />
        )}
      </View>
      {!!actor?.biography && (
        <>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Biografía</Text>
          <Text style={{ fontSize: 16, opacity: 0.7, textAlign: 'justify' }}>
            {actor?.biography}
          </Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  wrapperDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
});
