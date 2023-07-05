import axios from 'axios';

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || `http://localhost:3001`;

export const passwordResetReq = async (passwordResetFormParams: {
  email: string;
}) => {
  return axios(BACKEND_URL + `/password/reset`, {
    method: `POST`,
    headers: {
      'Content-Type': `application/json`,
    },
    data: JSON.stringify(passwordResetFormParams),
  });
};
