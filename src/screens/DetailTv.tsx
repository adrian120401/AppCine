import React, { useState } from 'react';
import { CastSlider } from '../components/CastSlider';
import { LayoutContainer } from '../components/LayoutContainer';
import  TvDescription from '../components/tv/TvDescription';
import { TvDetails } from '../components/tv/TvDetails';
import { Poster } from '../components/Poster';
import QRModal from '../components/QRModal';
import { useMovieDetails } from '../hooks/useMovieDetails';

export const DetailTv = ({route}:any) => {
  const movieId= route.params.movie.id
  const [showShareOpt, setsSowShareOpt] = useState(false);
  const { cast, movieFull } = useMovieDetails(movieId , 'tv');

  const shareOptHandler = () => {
    setsSowShareOpt(!showShareOpt);
  };

  const qrValue = `serie_id:${movieId}`;

  return (
    <LayoutContainer>
      <Poster posterPath={movieFull?.poster_path!!} />
      <TvDescription tv={movieFull!!} shareOptHandler={shareOptHandler} />
      <TvDetails tvFull={movieFull!!} />
      <CastSlider cast={cast} />
      <QRModal
        isVisible={showShareOpt}
        modalHandler={shareOptHandler}
        qrValue={qrValue}
        type={'tv'}
      />
    </LayoutContainer>
  );
};
