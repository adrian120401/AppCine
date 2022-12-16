import React, { useEffect, useState } from 'react'
import {View,StyleSheet, TextInput, FlatList,TouchableOpacity, Dimensions,Image} from 'react-native'
import movieDB from '../api/movieDB'
import { useNavigation } from '@react-navigation/core';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ScrollView } from 'react-native-gesture-handler';


const { height: windowHeight } = Dimensions.get('window');
const windowWidth  =  Dimensions.get('screen').width / 2 - 30

const SearchScreen = ({route}:any) => {
    const type=route.params.type
    const [text,setText] = useState("")
    const [result, setResult] = useState([])
    const navigation = useNavigation();

    useEffect(()=>{
        getResult()
    },[text])

    const uri = `/search/${type}?query=${text}`

    const getResult = async()=> {
        const data= await movieDB.get(uri)
        setResult(data.data.results)
        console.log(result)
    }

    const renderItem = ({item}:any) =>{
        const url = `https://image.tmdb.org/t/p/w500${item.poster_path}`
        return(
          <TouchableOpacity onPress={()=> navigation.navigate((type==='movie') ? 'DetailScreen' : 'DetailTv' , {movie: item})}>
            <Image style={styles.avatar} source={{uri:url}}></Image>
        </TouchableOpacity>
        )
    }   

    return(
        <View style={styles.container}>
            
        <ScrollView>
            <View style={styles.extrapadding}>
                <FlatList
                data={result}
                keyExtractor={(item, index) => item.id.toString()+index}
                renderItem={renderItem}
                style={styles.actorsList}
                numColumns={2}
            />
            </View>
            </ScrollView>
            <View style={styles.containerInput}>
            <Icon
            name="search"
            color="black"
            size={25}
          />
            <TextInput style={styles.input} value={text} onChangeText={setText} placeholder='Search'></TextInput>
            </View>
        </View>
    )
}

const styles= StyleSheet.create(
    {
        extrapadding:{
            paddingHorizontal: 5,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
            marginTop: 80,
        },
        containerInput:{
            position: 'absolute',
            opacity: 0.85,
             borderWidth: 1,
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 7.5,
            margin: 15,
            elevation: 9,
            backgroundColor: 'white'
        },
        container:{
            flex: 1 
        },
        input: {
            flex: 1,
            marginLeft: 5,
          },
          avatar: {
            width: 160,
            height: 280,
            borderRadius: 10,
            margin:8
          },
    }
)

export default SearchScreen