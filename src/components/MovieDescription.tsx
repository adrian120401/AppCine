import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Movie, MovieFull } from '../interfaces/movieInterface';

interface Props {
  movie: Movie | MovieFull;
  shareOptHandler: () => void;
}

export const MovieDescription = ({ movie, shareOptHandler }: Props) => {
  return (
    <View style={styles.marginContainer}>
      <View style={styles.textWrapper}>
        <Text style={styles.subTitle}>{movie?.original_title}</Text>
        <Text style={styles.title}>{movie?.title}</Text>
      </View>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity onPress={shareOptHandler} activeOpacity={0.7}>
          <Icon color="#3B3B39" name="qr-code-2" size={35} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  marginContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textWrapper: {
    flex: 1,
  },
  buttonWrapper: {
    justifyContent: 'flex-end',
    // marginHorizontal: 10,
    // backgroundColor: 'red',
  },
  subTitle: {
    fontSize: 16,
    opacity: 0.8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
