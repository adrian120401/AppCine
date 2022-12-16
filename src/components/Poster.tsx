import React from 'react';
import { Image, StyleSheet, View, Dimensions } from 'react-native';
const screenHeight = Dimensions.get('screen').height;
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
  posterPath: string;
}

export const Poster = ({ posterPath }: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${posterPath}`;
  return (
    <View style={styles.imageContainer}>
      <View style={styles.imageBorder}>
        {!posterPath ? (
          <Icon
            color="#91918D"
            name="broken-image"
            size={130}
            style={styles.brokenImage}
          />
        ) : (
          <Image
            source={{ uri }}
            style={styles.posterImage}
            resizeMode="cover"
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: screenHeight * 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
    justifyContent: 'center',
  },
  posterImage: {
    flex: 1,
  },
  brokenImage: {
    alignSelf: 'center',
  },
});
