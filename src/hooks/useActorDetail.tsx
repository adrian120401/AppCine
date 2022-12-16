import { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { Cast } from '../interfaces/creditsInterface';

interface ActorDetails {
  isLoading: boolean;
  actor?: Cast;
}

export const useActorDetails = (actorId: number) => {
  const [state, setState] = useState<ActorDetails>({
    isLoading: true,
    actor: undefined,
  });

  useEffect(() => {
    const getActorDetails = async () => {
      const actorDetailsPromise = movieDB.get<Cast>(`/person/${actorId}`);

      const actorDetailsResp = await Promise.resolve(actorDetailsPromise);

      setState({
        isLoading: false,
        actor: actorDetailsResp.data,
      });
    };
    getActorDetails();
  }, [actorId]);

  return {
    ...state,
  };
};
