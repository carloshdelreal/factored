import axios from 'axios';

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || `http://localhost:3001`;

export const forgotPasswordReq = async (forgotPasswordFormParams: {
  email: string;
}) => {
  return axios(BACKEND_URL + `/password/forgot`, {
    method: `POST`,
    headers: {
      'Content-Type': `application/json`,
    },
    data: JSON.stringify(forgotPasswordFormParams),
  });
};
