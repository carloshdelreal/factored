import { NotificationType, ReportAction } from '../types';
import { Notification } from '../types';
import { v4 as uuidv4 } from 'uuid';

export type Report = {
  payload: Notification;
  type: ReportAction.report;
};

export type Close = {
  type: ReportAction.close;
};

export const notifySuccess = (notification: Notification): Report => {
  return {
    type: ReportAction.report,
    payload: notification,
  };
};

export const closeNotifications = (): Close => {
  return {
    type: ReportAction.close,
  };
};

export const registrationSuccess = (detail?: string) => {
  return notifySuccess({
    id: uuidv4(),
    title: `registration succeded`,
    detail: detail || `the registration was successful`,
    type: NotificationType.Success,
  });
};

export const registrationFailed = (detail?: string) => {
  return notifySuccess({
    id: uuidv4(),
    title: `registration failed`,
    detail: detail || `the registration failed`,
    type: NotificationType.Error,
  });
};

export const accountActivationSuccess = (detail?: string) => {
  return notifySuccess({
    id: uuidv4(),
    title: `account activation succeded`,
    detail:
      detail || `your account was successfully activated, now you can login`,
    type: NotificationType.Success,
  });
};

export const accountActivationFailed = (detail?: string) => {
  return notifySuccess({
    id: uuidv4(),
    title: `account activation failed`,
    detail:
      detail || `there was a problem activating your account, reset password`,
    type: NotificationType.Error,
  });
};

export const loginSuccess = (detail?: string) => {
  return notifySuccess({
    id: uuidv4(),
    title: `welcome`,
    detail: detail || `you logged in successfully`,
    type: NotificationType.Success,
  });
};

export const loginFailed = (detail?: string) => {
  return notifySuccess({
    id: uuidv4(),
    title: `email or password might be wrong`,
    detail: detail || `the login process was not successful`,
    type: NotificationType.Error,
  });
};

export const resetingPasswordSuccess = (detail?: string) => {
  return notifySuccess({
    id: uuidv4(),
    title: `reseting password`,
    detail: detail || `a token to reset your password was sent to your email`,
    type: NotificationType.Success,
  });
};

export const passwordResetted = (detail?: string) => {
  return notifySuccess({
    id: uuidv4(),
    title: `reseting password`,
    detail: detail || `your password has been successfully redefined`,
    type: NotificationType.Success,
  });
};