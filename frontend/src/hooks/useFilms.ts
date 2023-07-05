import { useQuery } from 'react-query';
import { getFilms } from '@/services/queries';
import { getToken } from '@/utils/tokenAndUserData';

export const useFilms = () => {
  const token = getToken()
  const {isLoading, data } = useQuery('films', () => getFilms(token))

  return { isLoading, data };
};
