import axios from 'axios';
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || `http://localhost:3001`;

export const getFilms = async (token) => {
  return axios.get(BACKEND_URL + `/films`, { headers: { Authorization: `${token}`}});
};

export const getPeople = async (token) => {
  return axios.get(BACKEND_URL + `/people`, { headers: { Authorization: `${token}`}});
};

export const getPlanets = async (token) => {
  return axios.get(BACKEND_URL + `/planets`, { headers: { Authorization: `${token}`}});
};
