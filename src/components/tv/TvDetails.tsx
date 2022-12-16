import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';



export const TvDetails = ({ tvFull }: any) => {
  return (
    <View style={detailStyles.container}>
      <View style={detailStyles.rate}>
        <Icon name="star-half" color="grey" size={16} />
        <Text> {tvFull?.vote_average}</Text>
        <Text style={detailStyles.genres}>
          - {tvFull?.genres.map((g) => g.name).join(', ')}
        </Text>
      </View>
      <Text style={detailStyles.header}>Historia</Text>
      <Text style={detailStyles.overview}>{tvFull?.overview}</Text>
    </View>
  );
};

const detailStyles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  rate: {
    flexDirection: 'row',
  },
  genres: {
    marginLeft: 5,
  },
  header: {
    fontSize: 23,
    marginTop: 10,
    fontWeight: 'bold',
  },
  budget: {
    fontSize: 18,
  },
  overview: {
    fontSize: 16,
    textAlign: 'justify',
  },
});
