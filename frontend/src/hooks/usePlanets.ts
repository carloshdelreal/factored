import { useQuery } from 'react-query';
import { getPlanets } from '@/services/queries';
import { getToken } from '@/utils/tokenAndUserData';

export const usePlanets = () => {
  const token = getToken()
  const {isLoading, data } = useQuery('people', () => getPlanets(token))

  return { isLoading, data };
};
