import axios from 'axios';

const api = axios.create({
  baseURL: 'https://randomuser.me/api',
});

export const getUsers = async (page: number, results: number = 20) => {
  const response = await api.get(`/?page=${page}&results=${results}`);
  return response.data.results;
};
