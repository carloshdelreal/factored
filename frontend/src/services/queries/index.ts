import axios from 'axios';
const BACKEND_URL = process.env.BACKEND_URL || `http://localhost:3001`;

export const getQuestions = async () => {
  return axios.get(BACKEND_URL + `/questions`);
};
