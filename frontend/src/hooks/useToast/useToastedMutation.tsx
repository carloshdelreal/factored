import { useMutation, UseMutationResult } from 'react-query';
import { AlertProps, SnackbarProps } from '@mui/material';
import { errorMessage } from './errorMessage';

export type UseToastState = {
  message?: AlertProps['children'];
  open: SnackbarProps['open'];
  severity?: AlertProps['severity'];
};

export type UseToastCommonProps = {
  burnToast: (message: UseToastState['message']) => void;
  makeToast: (
    message: UseToastState['message'],
    severity?: UseToastState['severity'],
  ) => void;
};

export type UseToastedMutationOpts = {
  [key: string]: any;
  errorMsg: React.ReactNode;
  onCompleted: (data: any) => void;
  onError: (data: any) => void;
  successMsg: React.ReactNode;
};

export type UseToastedMutationFunc = (
  mutation: any,
  opts: any,
) => UseMutationResult;

type UseToastedMutationFuncParams = UseToastCommonProps & {
  useHook?: boolean;
};

type UseToastedMutationHoc = (
  options: UseToastedMutationFuncParams,
) => UseToastedMutationFunc;

export const useToastedMutation: UseToastedMutationHoc =
  ({ makeToast, burnToast, useHook = false }) =>
  // variation on useMutation which shows the toast
  (mutation, opts) => {
    const { onCompleted, onError, errorMsg, successMsg, ...other } = opts;

    function isFunction(functionToCheck) {
      return (
        functionToCheck &&
        {}.toString.call(functionToCheck) === `[object Function]`
      );
    }

    const mutationOpts = {
      ...other,
      onCompleted: (data) => {
        if (onCompleted) onCompleted(data);
        if (successMsg)
          makeToast(isFunction(successMsg) ? successMsg(data) : successMsg);
      },
      onError: (e) => {
        const apiErrorMessage = errorMessage(e);
        let message = apiErrorMessage;
        if (errorMsg) {
          message = isFunction(errorMsg) ? errorMsg(apiErrorMessage) : errorMsg;
        }
        burnToast(message);
        if (onError) onError(e);
      },
    };
    const mutate = useHook
      ? mutation(mutationOpts)
      : // TODO: CS - I think this is a false positive but will investigate further
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useMutation(mutation, mutationOpts);

    return mutate;
  };
