import { useToast } from './useToast';
import { signup } from '../services/api';
import { useRouter } from 'next/router';
import { routes } from '../utils/routes';
import { useNotification } from './useNotification';

export const useSignUpMutation = () => {
  const { toastComponent, useToastedMutation, burnToast } = useToast();
  const { regSucceed } = useNotification();
  const router = useRouter();
  const signUpQueryOptions = {
    onCompleted: ({ data }) => {
      const { code, message } = data?.status;
      if (code == 200 && message) {
        regSucceed()
        router.push(routes.login);
      } else
        burnToast(
          `Something Went Wrong with the api expected data ${JSON.stringify(
            data,
          )}`,
        );
    },

    successMsg: `A confirmation email was sent to your email account...`,
  };

  const { isLoading, mutate } = useToastedMutation(signup, {
    onSuccess: signUpQueryOptions.onCompleted,
  });

  return { isLoading, mutate, toastComponent };
};
