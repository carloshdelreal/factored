import axios from 'axios';

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || `http://localhost:3001`;

export const login = async (loginFormParams: {
  email: string;
  password: string;
}) => {
  return axios(BACKEND_URL + `/login`, {
    method: `POST`,
    headers: {
      'Content-Type': `application/json`,
    },
    data: JSON.stringify({ user: loginFormParams }),
  });
};
