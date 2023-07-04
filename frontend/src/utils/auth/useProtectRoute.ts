import { useContext } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '../../utils/AuthContext';

export const useProtectRoute = (): boolean => {
  const {
    authInfo: { isLoggedIn },
    loading,
  } = useContext(AuthContext);

  const router = useRouter();

  if (!isLoggedIn && !loading) {
    router.push(`/log-in`);
  }
  return isLoggedIn;
};
