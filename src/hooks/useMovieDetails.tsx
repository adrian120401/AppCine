import { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { MovieFull } from '../interfaces/movieInterface';
import { CreditsResponse, Cast } from '../interfaces/creditsInterface';

interface MovieDetails {
  isLoading: boolean;
  movieFull?: MovieFull;
  cast: Cast[];
}

export const useMovieDetails = (movieId: number, type:any) => {
  const [state, setState] = useState<MovieDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: [],
  });

  useEffect(() => {
    const getMovieDetails = async () => {
      let movieDetailsPromise: any;
      let castPromise: any;

      movieDetailsPromise = movieDB.get<MovieFull>(`${type}/${movieId}`);
      castPromise = movieDB.get<CreditsResponse>(`${type}/${movieId}/credits`);

      const [movieDetailsResp, castPromiseResp] = await Promise.all([
        movieDetailsPromise,
        castPromise,
      ]);

      setState({
        isLoading: false,
        movieFull: movieDetailsResp.data,
        cast: castPromiseResp.data.cast,
      });
    };

    getMovieDetails();
  }, [movieId]);
  return {
    ...state,
  };
};
