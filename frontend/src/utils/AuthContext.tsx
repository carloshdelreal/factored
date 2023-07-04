import React, { useEffect, useMemo, useReducer, useState } from 'react';
import { Maybe, User } from '../types';
import {
  getTokenAndUserData,
  removeTokenAndUserData,
  setTokenAndUserData,
} from './tokenAndUserData';

export type Action = LoginAction | LogoutAction | UpdateEmail;

export enum AuthActionTypes {
  login = `login`,
  logout = `logout`,
  updateEmail = `updateEmail`,
}

type LoginAction = {
  payload: {
    token: string;
    userData: User;
  };
  type: AuthActionTypes.login;
};

type LogoutAction = {
  type: AuthActionTypes.logout;
};

type UpdateEmail = {
  payload: string;
  type: AuthActionTypes.updateEmail;
};

type AuthInfo = {
  isLoggedIn: boolean;
  token: string;
  userData: Maybe<User>;
};

const reducer: React.Reducer<AuthInfo, Action> = (state, action) => {
  switch (action.type) {
    case AuthActionTypes.login:
      setTokenAndUserData(action.payload.token, action.payload.userData);
      return {
        ...state,
        isLoggedIn: true,
        token: action.payload.token,
        userData: action.payload.userData,
      };

    case AuthActionTypes.logout:
      removeTokenAndUserData();
      window.location.href = `/`;
      return { ...state };

    default:
      throw new Error(`Action type not recognized for AuthContext reducer`);
  }
};

const initialState = { isLoggedIn: false, token: ``, userData: null };

type IAuthContext = {
  authInfo: AuthInfo;
  dispatchAuthInfo: React.Dispatch<Action>;
  loading: boolean;
};

export const AuthContext = React.createContext<IAuthContext>({
  authInfo: initialState,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  dispatchAuthInfo: () => {},
  loading: true,
});

export const AuthProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [authInfo, dispatchAuthInfo] = useReducer(reducer, initialState);

  useEffect(() => {
    const { token, userData } = getTokenAndUserData();
    if (!!token && userData) {
      dispatchAuthInfo({
        payload: { token, userData },
        type: AuthActionTypes.login,
      });
    }
    setLoading(false);
  }, []);

  const authProviderValue = useMemo(
    () => ({
      authInfo,
      dispatchAuthInfo,
      loading,
    }),
    [authInfo, dispatchAuthInfo, loading],
  );

  return (
    <AuthContext.Provider value={authProviderValue}>
      {children}
    </AuthContext.Provider>
  );
};
