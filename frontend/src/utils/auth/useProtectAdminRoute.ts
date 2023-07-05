import { useContext } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '../../utils/AuthContext';
import { UserType } from '../../types';
import { routes } from '../routes';

export const useProtectAdminRoute = (): boolean => {
  const {
    authInfo: { isLoggedIn, userData },
    loading,
  } = useContext(AuthContext);

  const router = useRouter();

  if (!isLoggedIn && !loading && userData?.type !== UserType.ADMIN) {
    router.push(routes.login);
  }
  return isLoggedIn && userData?.type === UserType.ADMIN;
};
