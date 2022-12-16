import React,{useState,useEffect} from 'react'
import Carousel from 'react-native-snap-carousel';
import {View,TouchableOpacity,Image,StyleSheet, Dimensions} from 'react-native'
import movieDB from '../../api/movieDB'
import { useNavigation } from '@react-navigation/core';

const NowPlayng = ({type}:any) =>{
    const [movies,setMovies] = useState([])
    const navigation = useNavigation();

    useEffect(()=>{
        getMovies()
    },[])

    const uri = type === 'movie' ? '/movie/now_playing' : '/tv/popular'

    const getMovies = async() => {
        const data= await movieDB.get(uri)
        setMovies(data.data.results)
        console.log(movies)
    }
    const renderItem = ({item}:any) =>{
        const url = `https://image.tmdb.org/t/p/w500${item.poster_path}`
        return(
          <TouchableOpacity onPress={()=> navigation.navigate((type==='movie') ? 'DetailScreen' : 'DetailTv' , {movie: item})}>
            <Image style={styles.image} source={{uri:url}}></Image>
        </TouchableOpacity>
        )
    }   

    const { width : windowWidth } = Dimensions.get('window');
    
    

    return(
        <View style={styles.container}>
    <Carousel
              layout={'default'}
              data={movies}
              renderItem={renderItem}
              sliderWidth={windowWidth}
              itemWidth={280}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    image:{
        height:400,
        width:250,
        marginTop:10,
        borderRadius:10
    },
    container: {
        flex:1
    }
  });

export default NowPlayng