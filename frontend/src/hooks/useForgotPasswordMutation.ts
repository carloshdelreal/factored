import { useToast } from './useToast';
import { forgotPasswordReq } from '../services/api';
import { useNotification } from './useNotification';
import { useRouter } from 'next/router';
import { routes } from '@/utils/routes';

export const useForgotPasswordMutation = () => {
  const { toastComponent, useToastedMutation, burnToast } = useToast();
  const { resetingPasswordSucc } = useNotification();
  const router = useRouter()
  const options = {
    onCompleted: ({ data }) => {
      if (data) {
        console.log({data})
        resetingPasswordSucc()
        router.push(routes.resetPassword)
      } else
        burnToast(
          `Something Went Wrong with the api expected data ${JSON.stringify(
            data,
          )}`,
        );
    },

    successMsg: `Logged in successfully! Please hold...`,
  };

  const { isLoading, mutate } = useToastedMutation(forgotPasswordReq, {
    onSuccess: options.onCompleted,
  });

  return { isLoading, mutate, toastComponent };
};
