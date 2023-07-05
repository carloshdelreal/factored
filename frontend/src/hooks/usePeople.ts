import { useQuery } from 'react-query';
import { getPeople } from '@/services/queries';
import { getToken } from '@/utils/tokenAndUserData';

export const usePeople = () => {
  const token = getToken()
  const {isLoading, data } = useQuery('people', () => getPeople(token))

  return { isLoading, data };
};
