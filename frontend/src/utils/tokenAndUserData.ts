import { Maybe, User } from '../types';
import { storage } from './storage';

type TokenAndUserData = {
  token: string;
  userData: Maybe<User>;
};

//
// Get
//

export const getUserData = (): TokenAndUserData['userData'] =>
  storage.getItem<User>(`userData`);
export const getToken = (): TokenAndUserData['token'] =>
  storage.getItem<string>(`token`) || ``;

export const getTokenAndUserData = (): TokenAndUserData => ({
  token: getToken(),
  userData: getUserData(),
});

export const isLoggedIn = (): boolean => !!storage.getItem<string>(`token`);

//
// Set
//

export const setTokenAndUserData = (
  token: string,
  userData: Record<string, unknown>,
): void => {
  storage.setItem(`token`, token);
  storage.setItem(`userData`, userData);
};

export const setToken = (token: string): void => {
  storage.setItem(`token`, token);
};

//
// Remove
//

export const removeTokenAndUserData = (): void => {
  storage.removeItem(`token`);
  storage.removeItem(`userData`);
};
