import React from 'react'
import { LayoutContainer } from '../components/LayoutContainer';
import Popular from '../components/movies/Popular';
import Best from '../components/movies/Best'
import UpComming from '../components/movies/UpComming'
import NowPlayng from '../components/movies/NowPlayng'

 const HomeTvScreen = () => {
    return(
        <LayoutContainer>
            <NowPlayng type={'tv'}></NowPlayng>
            <Popular type={'tv'}></Popular>
            <Best type={'tv'}></Best>
            <UpComming type={'tv'}></UpComming>
        </LayoutContainer>
    )
 }


 export default HomeTvScreen