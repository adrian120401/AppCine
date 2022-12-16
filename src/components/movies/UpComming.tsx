import React,{useState, useEffect} from 'react'
import { FlatList, StyleSheet, View, Text, TouchableOpacity,Image } from 'react-native'
import movieDB from '../../api/movieDB'
import { useNavigation } from '@react-navigation/core';

const UpComming = ({type}:any) => {
    const [movies,setMovies] = useState([])
    const navigation = useNavigation();
    useEffect(()=>{
        getMovies()
    },[])

    const uri= type==='movie' ? '/movie/upcoming' : '/tv/airing_today'

    const getMovies = async() => {
        const data= await movieDB.get(uri)
        setMovies(data.data.results)
        console.log(movies)
    }

    const renderItem = ({item}:any) =>{
        const url = `https://image.tmdb.org/t/p/w500${item.poster_path}`
        return(
          <TouchableOpacity onPress={()=> navigation.navigate('DetailScreen' , {movie: item})}>
            <Image style={castingStyles.image} source={{uri:url}}></Image>
        </TouchableOpacity>
        )
    }   

    const name = type === 'movie' ? 'Proximos Estrenos' : 'Se emiten hoy'
    return(
        <View style={castingStyles.container}>
      <Text style={castingStyles.actorsHeader}>{name}</Text>
      <FlatList
        data={movies}
        keyExtractor={(item, index) => item.id.toString()+index}
        renderItem={renderItem}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={castingStyles.actorsList}
      />
    </View>
    )
}
const castingStyles = StyleSheet.create({
  image:{
    height:180,
    width:125,
    margin:5,
    borderRadius:10
},
    container: {
      marginTop: 40,
      flex:1
    },
    actorsHeader: {
      fontSize: 23,
      marginTop: 10,
      fontWeight: 'bold',
      marginHorizontal: 20,
    },
    actorsList: {
      marginTop: 10,
      height: 200,
    },
  });
export default UpComming