import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/Navigation';
import { CloseButton } from '../components/CloseButton';
import { ActorDetails } from '../components/ActorDetails';
import { ScrollView } from 'react-native';
import { Poster } from '../components/Poster';
import { useActorDetails } from '../hooks/useActorDetail';

interface Props
  extends StackScreenProps<RootStackParams, 'ActorDetailScreen'> {}

export const ActorScreen = ({ route }: Props) => {
  const { actorId } = route.params;
  const { actor } = useActorDetails(actorId);

  return (
    <ScrollView>
      <Poster posterPath={actor?.profile_path!} />
      <ActorDetails actor={actor!!} />
      <CloseButton />
    </ScrollView>
  );
};
