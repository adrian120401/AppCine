import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';
import { BarCodeReadEvent, RNCamera } from 'react-native-camera';
import { useIsFocused } from '@react-navigation/core';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';
import BarcodeMask from 'react-native-barcode-mask';
import movieDB from '../api/movieDB';
import { createIconSetFromFontello } from 'react-native-vector-icons';

export const QRScanScreen = () => {
  const [flash, setFlash] = useState(RNCamera.Constants.FlashMode.off);
  const [error, setError] = useState(false);
  const isFocused = useIsFocused();
  const [scanned, setScanned] = useState<boolean>(false);
  const [id,setId]=useState(512195)

  const navigation = useNavigation();

  const MATCHING_REGEX = /movie_id:([0-9]+)|(serie_id:([0-9]+))/;

  const handleBarCodeScanned = async (scanningResult: BarCodeReadEvent) => {
    if (!scanned) {
      const { data } = scanningResult;
      const dataMatch = data.match(MATCHING_REGEX);
      setScanned(true);
      if (!dataMatch) {
        setError(true);
      } else {
        
        const category = dataMatch[0].split(':')[0];
        const type = (category === 'movie_id') ? 'movie' : 'tv'
        const movie_id = (category === 'movie_id') ? dataMatch[1] : dataMatch[0].split(':')[1] ;
        console.log(dataMatch)
        console.warn(category)
        console.warn(movie_id);
        const movie= await getMovie(movie_id,type)
        console.log(movie)
        navigation.navigate( (type === 'movie') ? 'DetailScreen' : 'DetailTv' , {movie:movie})
      }
    }
  };

  const getMovie=async(movie_id:string, category:string)=>{
      const uri=`/${category}/${movie_id}`
      const data = await movieDB.get(uri)
      return data.data
}

  const handleOnFlashPress = useCallback(() => {
    setFlash(
      flash === RNCamera.Constants.FlashMode.off
        ? RNCamera.Constants.FlashMode.torch
        : RNCamera.Constants.FlashMode.off,
    );
  }, [flash]);

  if (!isFocused) return null;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <RNCamera
        style={styles.camera}
        flashMode={flash}
        barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}
        onBarCodeRead={handleBarCodeScanned}
        captureAudio={false}
      >
        <BarcodeMask
          width={300}
          height={300}
          edgeColor={scanned ? '#00bb2d' : '#62B1F6'}
        />
        <View style={styles.captionContainer}>
          <View
            style={[
              styles.wrapperMessage,
              { backgroundColor: error ? '#EB5757' : '#EDEDED' },
            ]}
          >
            <Text>
              {error
                ? 'Código QR no válido.'
                : 'Coloque el código QR dentro del marco.'}
            </Text>
          </View>
          <TouchableOpacity
            onPress={handleOnFlashPress}
            style={styles.floatingButton}
          >
            <Icon
              color="black"
              name={!flash ? 'flash-outline' : 'flash-off-outline'}
              size={45}
            />
          </TouchableOpacity>
        </View>
      </RNCamera>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  camera: {
    flex: 1,
    borderRadius: 15,
    margin: 15,
    overflow: 'hidden',
  },
  captionContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrapperMessage: {
    width: '90%',
    paddingVertical: 15,
    paddingHorizontal: 23,
    marginTop: 15,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 1,
  },
  floatingButton: {
    elevation: 9,
    backgroundColor: 'white',
    borderRadius: 30,
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
});
