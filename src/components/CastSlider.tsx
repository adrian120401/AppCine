import React from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import { Cast } from '../interfaces/creditsInterface';
import { CastItem } from './CastItem';

interface Props {
  cast: Cast[];
}

export const CastSlider = ({ cast }: Props) => {
  return (
    <View style={castingStyles.container}>
      <Text style={castingStyles.actorsHeader}>Actores</Text>
      <FlatList
        data={cast}
        keyExtractor={(item, index) => item.id.toString() + index}
        renderItem={({ item }) => <CastItem actor={item} />}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={castingStyles.actorsList}
      />
    </View>
  );
};

const castingStyles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  actorsHeader: {
    fontSize: 23,
    marginTop: 10,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
  actorsList: {
    marginTop: 10,
    height: 70,
  },
});
