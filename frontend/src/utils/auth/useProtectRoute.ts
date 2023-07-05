import { useContext } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '../../utils/AuthContext';
import { routes } from '../routes';

export const useProtectRoute = (): boolean => {
  const {
    authInfo: { isLoggedIn },
    loading,
  } = useContext(AuthContext);

  const router = useRouter();

  if (!isLoggedIn && !loading) {
    router.push(routes.login);
  }
  return isLoggedIn;
};
