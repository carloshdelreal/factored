import axios from 'axios';

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || `http://localhost:3001`;

interface Isignup {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const signup = async (signUpFormParams: Isignup) => {
  return axios(BACKEND_URL + `/signup`, {
    method: `POST`,
    headers: {
      'Content-Type': `application/json`,
    },
    data: JSON.stringify({ user: signUpFormParams }),
  });
};
