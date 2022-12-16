import React, { useState } from 'react';
import { CastSlider } from '../components/CastSlider';
import { LayoutContainer } from '../components/LayoutContainer';
import { MovieDescription } from '../components/MovieDescription';
import { MovieDetails } from '../components/MovieDetails';
import { Poster } from '../components/Poster';
import QRModal from '../components/QRModal';
import { useMovieDetails } from '../hooks/useMovieDetails';

export const DetailScreen = ({route}:any) => {
  const movieId= route.params.movie.id
  const [showShareOpt, setsSowShareOpt] = useState(false);
  const { cast, movieFull } = useMovieDetails(movieId , 'movie');

  const shareOptHandler = () => {
    setsSowShareOpt(!showShareOpt);
  };

  const qrValue = `movie_id:${movieId}`;

  return (
    <LayoutContainer>
      <Poster posterPath={movieFull?.poster_path!!} />
      <MovieDescription movie={movieFull!!} shareOptHandler={shareOptHandler} />
      <MovieDetails movieFull={movieFull!!} />
      <CastSlider cast={cast} />
      <QRModal
        isVisible={showShareOpt}
        modalHandler={shareOptHandler}
        qrValue={qrValue}
        type={'movie'}
      />
    </LayoutContainer>
  );
};
