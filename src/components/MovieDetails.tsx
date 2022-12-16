import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import currencyFormatter from 'currency-formatter';
import Icon from 'react-native-vector-icons/Ionicons';

import { MovieFull } from '../interfaces/movieInterface';

interface Props {
  movieFull: MovieFull;
}

export const MovieDetails = ({ movieFull }: Props) => {
  return (
    <View style={detailStyles.container}>
      <View style={detailStyles.rate}>
        <Icon name="star-half" color="grey" size={16} />
        <Text> {movieFull?.vote_average}</Text>
        <Text style={detailStyles.genres}>
          - {movieFull?.genres.map((g) => g.name).join(', ')}
        </Text>
      </View>
      <Text style={detailStyles.header}>Historia</Text>
      <Text style={detailStyles.overview}>{movieFull?.overview}</Text>
      <Text style={detailStyles.header}>Presupuesto</Text>
      <Text style={detailStyles.budget}>
        {currencyFormatter.format(movieFull?.budget, { code: 'USD' })}
      </Text>
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
