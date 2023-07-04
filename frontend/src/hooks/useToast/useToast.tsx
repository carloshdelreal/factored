import React, { useState } from 'react';
import { Alert, Snackbar } from '@mui/material';
import {
  UseToastCommonProps,
  useToastedMutation,
  UseToastedMutationFunc,
  UseToastState,
} from './useToastedMutation';

const AUTO_HIDE_DURATION = 8000;

type UseToastFuncReturn = UseToastCommonProps & {
  toastComponent: JSX.Element;
  tossToast: () => void;
  useToastedHookMutation: UseToastedMutationFunc;
  useToastedMutation: UseToastedMutationFunc;
};

export const useToast = (): UseToastFuncReturn => {
  const [toastState, setToastState] = useState<UseToastState>({
    open: false,
  });

  // shows a toast
  const makeToast: UseToastFuncReturn['makeToast'] = (
    message,
    severity = `success`,
  ) =>
    setToastState({
      message,
      open: true,
      severity,
    });

  // shows an error toast
  const burnToast: UseToastFuncReturn['burnToast'] = (message) =>
    makeToast(message, `error`);

  // close the snackbar alert message
  const tossToast: UseToastFuncReturn['tossToast'] = () =>
    setToastState({
      open: false,
    });

  const useToastedMutationProps = {
    burnToast,
    makeToast,
  };

  return {
    burnToast,
    makeToast,
    toastComponent: (
      <Snackbar
        autoHideDuration={AUTO_HIDE_DURATION}
        open={toastState.open}
        onClose={tossToast}
      >
        <Alert severity={toastState.severity} onClose={tossToast}>
          {toastState.message}
        </Alert>
      </Snackbar>
    ),
    tossToast,
    useToastedHookMutation: useToastedMutation({
      useHook: true,
      ...useToastedMutationProps,
    }),
    useToastedMutation: useToastedMutation(useToastedMutationProps),
  };
};
