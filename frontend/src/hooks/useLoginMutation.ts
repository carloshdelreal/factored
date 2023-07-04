import { AuthActionTypes, AuthContext } from '../utils/AuthContext';
import { useContext } from 'react';
import { useToast } from './useToast';
import { login } from '../services/api';

export const useLoginMutation = () => {
  const { toastComponent, useToastedMutation, burnToast } = useToast();
  const { dispatchAuthInfo } = useContext(AuthContext);
  const logInQueryOptions = {
    onCompleted: ({ data, headers }) => {
      const token = headers?.authorization;
      const user = data?.data;
      if (token && user) {
        dispatchAuthInfo({
          payload: { token, userData: user },
          type: AuthActionTypes.login,
        });
      } else
        burnToast(
          `Something Went Wrong with the api expected data ${JSON.stringify(
            data,
          )}`,
        );
    },

    successMsg: `Logged in successfully! Please hold...`,
  };

  const { isLoading, mutate } = useToastedMutation(login, {
    onSuccess: logInQueryOptions.onCompleted,
  });

  return { isLoading, mutate, toastComponent };
};
