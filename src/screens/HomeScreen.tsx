import React from 'react'
import { LayoutContainer } from '../components/LayoutContainer';
import Popular from '../components/movies/Popular';
import Best from '../components/movies/Best'
import UpComming from '../components/movies/UpComming'
import NowPlayng from '../components/movies/NowPlayng'

 const HomeScreen = () => {
    return(
        <LayoutContainer>
            <NowPlayng type={'movie'}></NowPlayng>
            <Popular type={'movie'}></Popular>
            <Best type={'movie'}></Best>
            <UpComming type={'movie'}></UpComming>
        </LayoutContainer>
    )
 }


 export default HomeScreen