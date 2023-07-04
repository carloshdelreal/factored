import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../utils/AuthContext';
import { User } from '../../types';

type UseIsAuthenticatedHook = () => {
  loggedIn: boolean;
  userData: User | null;
};

export const useIsAuthenticated: UseIsAuthenticatedHook = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const {
    authInfo: { isLoggedIn, userData },
    loading,
  } = useContext(AuthContext);

  useEffect(() => {
    if (isLoggedIn && !loading) {
      setLoggedIn(true);
    }
  }, [loading, isLoggedIn]);

  return { loggedIn, userData };
};
