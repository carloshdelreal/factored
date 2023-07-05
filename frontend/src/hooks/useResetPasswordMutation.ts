import { useToast } from './useToast';
import { passwordResetReq } from '../services/api';
import { useRouter } from 'next/router';
import { routes } from '../utils/routes';
import { useNotification } from './useNotification';

export const useResetPasswordMutation = () => {
  const { toastComponent, useToastedMutation, burnToast } = useToast();
  const { passwordResettedSucc } = useNotification();
  const router = useRouter();
  const options = {
    onCompleted: ({ data }) => {
      const { status } = data;
      if (status == 'ok') {
        passwordResettedSucc()
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

  const { isLoading, mutate } = useToastedMutation(passwordResetReq, {
    onSuccess: options.onCompleted,
  });

  return { isLoading, mutate, toastComponent };
};
