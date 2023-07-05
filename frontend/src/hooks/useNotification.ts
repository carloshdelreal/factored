import {
  closeNotifications,
  registrationSuccess,
  registrationFailed,
  accountActivationSuccess,
  accountActivationFailed,
  loginSuccess,
  loginFailed,
} from '../actions/notifications';
import { useNotificationContext } from '../utils/NotificationContext';

export const useNotification = () => {
  const { dispatch } = useNotificationContext();

  const regFailed = (detail?: string) => {
    dispatch(registrationFailed(detail));
  };

  const regSucceed = (detail?: string) => {
    dispatch(registrationSuccess(detail));
  };

  const close = () => {
    dispatch(closeNotifications());
  };

  const accActSucceed = (detail?: string) => {
    dispatch(accountActivationSuccess(detail));
  };

  const accActFailed = (detail?: string) => {
    dispatch(accountActivationFailed(detail));
  };

  const loginSucc = (detail?: string) => {
    dispatch(loginSuccess(detail));
  };

  const loginFail = (detail?: string) => {
    dispatch(loginFailed(detail));
  };

  return {
    regFailed,
    regSucceed,
    close,
    accActSucceed,
    accActFailed,
    loginSucc,
    loginFail,
  };
};
