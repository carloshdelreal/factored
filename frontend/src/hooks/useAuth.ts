import { User } from '@/types';
import { useContext } from 'react';
import { AuthActionTypes, AuthContext } from '../utils/AuthContext';

export const useAuth = () => {
  const {
    authInfo: { isLoggedIn, userData, token },
    dispatchAuthInfo,
  } = useContext(AuthContext);

  const login = (token: string, userData: User) => {
    dispatchAuthInfo({
      payload: {
        token,
        userData,
      },
      type: AuthActionTypes.login,
    });
  };

  const logout = () => {
    dispatchAuthInfo({
      type: AuthActionTypes.logout,
    });
  };

  return {
    isLoggedIn,
    userData,
    token,
    login,
    logout,
  };
};
